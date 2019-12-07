import { ComponentBase } from "../../ej2-fidan-ui/_base";
import { SfMultiSelect } from "../../ej2-fidan-ui/components/MultiSelect";
import { IStateFormResources } from "../../../sis/model/state-form";
import { formListInput } from "./form-list-inputs";

export interface FormGroupProps extends ComponentBase<any> {
  input: IStateFormResources;
}

export const FormGroup = (props: FormGroupProps) => {
  const containerId =
    "fg_" +
    Math.random()
      .toString(36)
      .substr(2);

  let inputView = null;
  if (props.input.listItems) {
    inputView = formListInput(props, containerId);
  } else {
    const { name, label } = props.input;

    inputView = (
      <div className="e-float-input">
        <input
          type="text"
          id={name}
          name={name}
          required
          data-msg-containerid={containerId}
        />
        <span className="e-float-line"></span>
        <label className="e-float-text" for={name}>
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className="form-group">
      {inputView} <div id={containerId}></div>
    </div>
  );
};
