import { ComponentBase } from "../../../_base";
import { IStateFormResources } from "../../../../sis/model/state-form";

export interface FormGroupModel {
  label: string;
  name: string;
}

export const FormGroup = (
  props: { input: IStateFormResources } & ComponentBase<any>
) => {
  const containerId =
    "fg_" +
    Math.random()
      .toString(36)
      .substr(2);
  const { name, label } = props.input;

  return (
    <div className="form-group">
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
      <div id={containerId}></div>
    </div>
  );
};
