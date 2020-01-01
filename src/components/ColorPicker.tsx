
import { ColorPicker, ColorPickerModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfColorPicker = (props: ColorPickerModel & InputWithMessageProps<ColorPicker>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, ColorPicker);
  return _view;
};
