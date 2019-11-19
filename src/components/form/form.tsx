import { IStateFormResources } from "../../../sis/model/state-form";
import { IStateListState } from "../list/list";
import { FormValidator } from "@syncfusion/ej2-inputs";
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
  var options = {
    rules: {
      // User: { required: true },
      // DOB: { date: [true, "Enter valid format"] },
      // Email: { email: [true, "Enter valid Email"] },
      // City: { required: true },
      // State: { required: true }
    }
  };

  const formDom: HTMLFormElement = null;

  const inputKeys = Object.keys(props.schema);

  const view = (
    <div className="content-wrapper" style="margin-bottom: 25px;">
      <div className="form-title">
        <span>Add Customer Details</span>
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
            <div style="display: inline-block;">
              <SfButton isPrimary={true}>Kaydet</SfButton>
            </div>
            <div style="float: right;">
              <SfButton>Temizle</SfButton>
            </div>
          </div>
        </div>
        {/* <div className="form-group">
          <div className="e-float-input">
            <input
              type="text"
              id="user"
              name="User"
              required
              data-msg-containerid="userError"
            />
            <span className="e-float-line"></span>
            <label className="e-float-text" for="user">
              User Name
            </label>
          </div>
          <div id="userError"></div>
        </div>
        <div className="form-group">
          <div className="e-float-input">
            <input
              type="text"
              id="mail"
              name="Email"
              required
              data-msg-containerid="mError"
            />
            <span className="e-float-line"></span>
            <label className="e-float-text" for="mail">
              Email
            </label>
          </div>
          <div id="mError"></div>
        </div>
        <div className="form-group">
          <div className="e-float-input">
            <input
              type="text"
              id="dob"
              name="DOB"
              required
              data-msg-containerid="dateError"
            />
            <span className="e-float-line"></span>
            <label className="e-float-text" for="dob">
              DOB
            </label>
          </div>
          <div id="dateError"></div>
        </div>
        <div className="form-group">
          <div className="e-float-input">
            <textarea rows="4" id="Address" name="Address"></textarea>
            <span className="e-float-line"></span>
            <label className="e-float-text" for="address">
              Address
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="e-float-input">
            <input
              type="text"
              id="city"
              name="City"
              required
              data-msg-containerid="cityError"
            />
            <span className="e-float-line"></span>
            <label className="e-float-text" for="city">
              City
            </label>
          </div>
          <div id="cityError"></div>
        </div>
        <div className="form-group">
          <div className="e-float-input">
            <input
              type="text"
              id="state"
              name="State"
              required
              data-msg-containerid="stateError"
            />
            <span className="e-float-line"></span>
            <label className="e-float-text" for="state">
              State
            </label>
          </div>
          <div id="stateError"></div>
        </div> */}
      </form>
    </div>
  );

  // Initialize the FormValidator.
  var formObj = new FormValidator(formDom, options);
  formDom.addEventListener("submit", function(e) {
    e.preventDefault();
    if (formObj.validate()) {
      alert("Customer details added!");
      formObj.reset();
    }
  });
  return view;
};
