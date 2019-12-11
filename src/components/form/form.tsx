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

export interface IStateFormState<T> extends ComponentBase<T> {
  schema: StateFormDataType<T>;
  isValidForm?: boolean;
  isDirtyForm?: { value?: boolean };
  editId?: { value?: string };
  values?: { [key in keyof T]: any };
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

  var formObj = new FormValidator(
    view,
    formSchemaToEj2ValidatorModel(props.schema)
  );
  window.requestAnimationFrame(() => {
    view.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formObj.validate()) {
        formObj.reset();
      }
    });
    formObj.addEventListener("validationComplete", (args) => {
      console.log(args)
    })
  });

  props._view = view;
  props._component = formObj;
  props && props.onInit && props.onInit(props);

  return view;
};
