import { IStateFormResources } from "../../../sis/model/state-form";
import { IStateListState } from "../list/list";
import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";
import { FormGroup } from "../../ej2-fidan-ui-components/complex/form/FormGroup";
import { SfButton } from "../../ej2-fidan-ui-components/Button";

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
  form: IStateFormState<any>;
}

export type StateFormDataType<T> = {
  [key in keyof T]: IStateFormResources;
};

export interface IStateCrudState {
  restUrl: string;
  onlyLocal?: boolean;
  dialogMode?: DialogModeType;
  list: IStateListState;
  form: IStateFormState<any>;
  localDb?: PouchDB.Database;
  remoteDb?: PouchDB.Database;
}

export interface IStateFormState<T> {
  title: any;
  validation: FormValidatorModel;
  schema: StateFormDataType<T>;
  handlers?: { [key in keyof IStateFormHandlers]: any };
  isValidForm?: boolean;
  isDirtyForm?: { value?: boolean };
  editId?: { value?: string };
  fixedInputValues?: {
    [key: string]: { value: any; behaviour: "hidden" | "readonly" };
  };
  values?: { [key in keyof T]: any };
  hiddenFormOnInit?: boolean;
  onSubmit?: (values: any) => void;
  onValidated?: (errors: any, values) => void;
}

export interface IStateFormHandlers {
  editValues: (values: any) => IStateFormState<any>;
  submitCheck: (data) => IStateFormState<any>;
  onValidated: (errors, values) => IStateFormState<any>;
  formRef: (node) => IStateFormState<any>;
}

export const Form = (props: IStateFormState<any>) => {
  const formDom: HTMLFormElement = null;

  const inputKeys = Object.keys(props.schema);

  const view = (
    <div className="content-wrapper" style="margin-bottom: 25px;">
      <div className="form-title">
        <span>{props.title}</span>
      </div>
      <form ref={formDom} className="form-horizontal" novalidate="">
        {inputKeys.map(inputKey => {
          const input = props.schema[inputKey];
          return (
            <FormGroup label={input.label || input.name} name={input.name} />
          );
        })}
        <div className="row">
          <div style="width: 320px;margin:0px auto;height: 100px;padding-top: 25px;">
            <SfButton type="reset">Temizle</SfButton>
            <SfButton isPrimary={true}>Kaydet</SfButton>
          </div>
        </div>
      </form>
    </div>
  );

  // Initialize the FormValidator.
  window.requestAnimationFrame(() => {
    var formObj = new FormValidator(formDom, props.validation);
    formDom.addEventListener("submit", function(e) {
      e.preventDefault();
      if (formObj.validate()) {
        alert("Customer details added!");
        formObj.reset();
      }
    });
  });
  return view;
};
