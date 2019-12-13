import { FormGroupProps } from "./FormGroup";
import { SfMultiSelect } from "../../ej2-fidan-ui/components/MultiSelect";
import { SfRadioButton } from "../../ej2-fidan-ui/components/RadioButton";
import { SfCheckBox } from "../../ej2-fidan-ui/components/CheckBox";
import { SfAutoComplete } from "../../ej2-fidan-ui/components/AutoComplete";
import { SfDropDownList } from "../../ej2-fidan-ui/components/DropDownList";

export const formListInput = (props: FormGroupProps, containerId: string) => {
  const { input } = props;
  const { name, label, listWidgetType } = input;
  switch (listWidgetType) {
    case "multiselect":
      return (
        <SfMultiSelect
          id={name}
          name={name}
          placeholder={label}
          containerId={containerId}
          floatLabelType="Auto"
          dataSource={props.input.listItems}
          fields={{ text: "label", value: "value" }}
        />
      );
    case "dropdownlist":
      return (
        <SfDropDownList
          id={name}
          name={name}
          placeholder={label}
          containerId={containerId}
          floatLabelType="Auto"
          dataSource={props.input.listItems}
          fields={{ text: "label", value: "value" }}
        />
      );
    case "autocomplete":
      return (
        <SfAutoComplete
          id={name}
          name={name}
          placeholder={label}
          containerId={containerId}
          dataSource={props.input.listItems.map(
            item => item.label || item.value
          )}
        />
      );
    case "radiobuttons":
      return (
        <div className="control-section">
          <div className="radio-control">
            <h4 className="row">{label}</h4>
            {input.listItems.map((item, index) => {
              return (
                <div className="row">
                  <SfRadioButton
                    id={"rd_" + item.label}
                    label={item.label}
                    name={name}
                    value={item.value}
                    containerId={containerId}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    case "checkboxlist":
      return (
        <div className="control-section" data-msg-containerid={containerId}>
          <div className="checkbox-control">
            <h4 className="row">{label}</h4>
            {input.listItems.map((item, index) => {
              return (
                <div className="row">
                  <SfCheckBox
                    id={"ch_" + item.label}
                    label={item.label}
                    name={name}
                    value={item.value}
                    containerId={containerId}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
  }
};
