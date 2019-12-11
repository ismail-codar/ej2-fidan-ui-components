import {
  IStateFormResources,
  IFormValidation
} from "../../../sis/model/state-form";
import { IStateListState } from "../list/list";
import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";
import { FormGroup } from "./FormGroup";
import { SfButton } from "../../ej2-fidan-ui/components/Button";
import {
  formSchemaToEj2ValidatorModel,
  setFormSchemaDefaults
} from "./form-util";
import { ComponentBase } from "../../ej2-fidan-ui/_base";

export type DialogModeType = "hidden" | "add" | "edit" | "delete";

export interface IStateCrudViewStyles {
  root;
  addButton;
}

export interface IStateCrudHandlers {
  $load;
  dialogClose;
  submitForm;
  dialogAdd;
  dialogDelete;
  onSelectionChange;
}

export interface IStateCrudState {
  restUrl: string;
  onlyLocal?: boolean;
  dialogMode?: DialogModeType;
  list: IStateListState;
  form: FormModel<any>;
}

export type StateFormDataType<T> = {
  [key in keyof T]: IStateFormResources;
};

export interface IStateCrudState {
  restUrl: string;
  onlyLocal?: boolean;
  dialogMode?: DialogModeType;
  list: IStateListState;
  form: FormModel<any>;
  localDb?: PouchDB.Database;
  remoteDb?: PouchDB.Database;
}

export interface FormModel<T> {
  schema: StateFormDataType<T>;
  isValidForm?: boolean;
  isDirtyForm?: { value?: boolean };
  editId?: { value?: string };
  values?: { [key in keyof T]: any };
  onSubmit?: (values: any) => void;
  onValidated?: (errors: any, values) => void;
}

export interface FormComponent {
  validator: FormValidator
}

export interface IStateFormHandlers {
  editValues: (values: any) => FormModel<any>;
  submitCheck: (data) => FormModel<any>;
  onValidated: (errors, values) => FormModel<any>;
  formRef: (node) => FormModel<any>;
}

export const Form = (props: FormModel<any> & ComponentBase<FormComponent>) => {
  setFormSchemaDefaults(props.schema);
  const inputKeys = Object.keys(props.schema);

  const view = (
    <form className="form-horizontal" novalidate="">
      {inputKeys.map(inputKey => {
        const input = props.schema[inputKey];
        return <FormGroup input={input} />;
      })}
      {
        props.children
      }
    </form>
  );

  var validator = new FormValidator(
    view,
    formSchemaToEj2ValidatorModel(props.schema)
  );
  window.requestAnimationFrame(() => {
    view.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validator.validate()) {
        validator.reset();
      }
    });
    validator.addEventListener("validationComplete", (args) => {
      console.log(args)
    })
  });

  props._view = view;
  props._component.validator = validator;
  props && props.onInit && props.onInit(props);

  return view;
};
