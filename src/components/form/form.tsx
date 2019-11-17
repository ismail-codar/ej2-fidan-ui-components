import { IStateFormResources } from "../../../sis/model/state-form";
import { IStateListState } from "../list/list";

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

export type StateFormDataType<T> = { [key in keyof T]: IStateFormResources };

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
  handlers?: { [key in keyof IStateFormHandlers]: any };
  isValidForm?: boolean;
  isDirtyForm?: { value?: boolean };
  editId?: { value?: string };
  schema: StateFormDataType<T>;
  fixedInputValues?: {
    [key: string]: { value: any; behaviour: "hidden" | "readonly" };
  };
  values?: { [key in keyof T]: any };
  formRef?: (dom: HTMLFormElement) => void;
  hiddenFormOnInit?: boolean;
  inputRefs?: { [key: string]: HTMLElement };
  onSubmit?: (values: any) => void;
  onValidated?: (errors: any, values) => void;
  formWidth?: number;
  dummy?: boolean; // gerektiğinde form render in çalışabilmesi için değiştirilir
}

export interface IStateFormHandlers {
  editValues: (values: any) => IStateFormState<any>;
  submitCheck: (data) => IStateFormState<any>;
  onValidated: (errors, values) => IStateFormState<any>;
  formRef: (node) => IStateFormState<any>;
}

export const Form = (props: IStateFormState<any>) => {
  return <form></form>;
};
