import classNames from "classnames";
import disconnected from "disconnected";
import { createForm, FormApi, FieldState, FormState } from "final-form";
import { Definition, DefinitionOrBoolean } from "typescript-json-schema";
import { SfTextBox } from "../../TextBox";
const observe = disconnected({ Event, WeakSet });
const Ajv = require("ajv");
var ajv = new Ajv();

export interface FormProps {
  schema: Definition;
  state?: {
    formState?: FormState<any>;
    fieldProps?: { [key: string]: FormFieldProps };
  };
  api?: FormApi;
  onSubmit?: (
    values: FormData,
    form: FormApi,
    callback?: (errors?: object) => void
  ) => void;
  onValidated?: (errors) => {};
  decorators?: any[];
  labels?: { [key: string]: string };
  placeholders?: { [key: string]: string };
  errorTexts?: { [key: string]: string };
  components?: { [key: string]: any };
}

export interface FormFieldProps {
  form: FormState<any>;
  fieldSchema: Definition;
  name: string;
  label: string;
  placeholder: string;
  fieldState: FieldState<any>;
  errorTextRef: HTMLElement;
}

const getValueFromInputType = (type, value) => {
  if (type === "text") return value === "" ? null : value;
  else if (type == "number") return Number(value);
};

const getInputComponent = (props: FormFieldProps): any => {
  const { fieldState, name, placeholder, fieldSchema } = props;

  const type =
    fieldSchema.type === "string" ? "text" : fieldSchema.type.toString();
  return (
    <SfTextBox
      type={type}
      // className="form-control"
      placeholder={placeholder}
      id={name}
      change={e => {
        fieldState.change(getValueFromInputType(type, e.value));
      }}
      blur={e => fieldState.blur()}
      focus={e => fieldState.focus()}
      value={fieldState.value || ""}
    />
  );
};

const getValidationDefaults = (properties: Definition) => {
  const obj = {};
  for (var key in properties) {
    obj[key] = undefined;
  }
  return obj;
};

// https://github.com/final-form/react-final-form/blob/master/src/ReactFinalForm.js
export var JsonSchemaForm = (
  props: FormProps & { children?: any; ref?: HTMLElement }
) => {
  if (!props.state) {
    props.state = { fieldProps: {} };
  }
  const unsubscriptions = [];
  var validateForm = ajv.compile(props.schema);

  const form = (props.api = createForm({
    initialValues: getValidationDefaults(props.schema.properties),
    onSubmit: props.onSubmit,
    validate: values => {
      console.log(form);
      if (!form || Object.keys(values).length === 0) return null;

      for (var fieldName in props.state.fieldProps) {
        if (props.state.fieldProps[fieldName].errorTextRef)
          props.state.fieldProps[fieldName].errorTextRef.style.display = "none";
      }

      const errors = {};
      var valid = validateForm(values);
      if (!valid) {
        validateForm.errors.forEach(e => {
          if (e.dataPath) {
            const errorKey = e.dataPath.substr(1);
            errors[errorKey] = e.message;
            checkError(errorKey, e.message);
          }
        });
      }

      return errors;
    }
  }));

  const formUnsubscribe = form.subscribe(
    formState => {
      props.state.formState = formState;
    },
    { active: true }
  );
  unsubscriptions.push(formUnsubscribe);
  if (props.decorators) {
    props.decorators.forEach(decorator => {
      unsubscriptions.push(decorator(form));
    });
  }

  const checkError = (fieldName, message) => {
    const field = form.getFieldState(fieldName);
    if (field.touched) {
      const errorTextRef = props.state.fieldProps[fieldName].errorTextRef;
      errorTextRef.innerText = message;
      errorTextRef.style.display = "";
    }
  };

  const properties = Object.keys(props.schema.properties);
  const view = (
    <form>
      {properties.map(fieldName => {
        const label = props.labels ? props.labels[fieldName] : fieldName;
        props.state.fieldProps[fieldName] = {
          form: form.getState(),
          fieldState: null,
          name: fieldName,
          label: label,
          fieldSchema: props.schema.properties[fieldName] as Definition,
          placeholder: props.placeholders
            ? props.placeholders[fieldName]
            : label,
          errorTextRef: null
        };
        form.registerField(
          fieldName,
          fieldState => {
            props.state.fieldProps[fieldName].fieldState = fieldState;
          },
          { value: true }
        );
        const Component =
          props.components && props.components[fieldName]
            ? props.components[fieldName]
            : getInputComponent(props.state.fieldProps[fieldName]);
        let componentDom = Component;
        if (typeof Component === "function") {
          componentDom = Component(props);
        }
        return (
          <div className="form-group">
            <label>{label}</label>
            {componentDom}
            <div
              ref={props.state.fieldProps[fieldName].errorTextRef}
              className="fform-error-text"
              style={{ display: "none" }}
            />
          </div>
        );
      })}
    </form>
  );

  unsubscriptions.forEach(unsubscribe => unsubscribe());

  return view;
};
