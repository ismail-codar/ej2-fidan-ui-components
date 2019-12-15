import { FidanValue } from "@fidanjs/runtime";

export interface ComponentBase<T> {
  id?: any;
  children?: any;
  _component?: T;
  _view?: HTMLElement;
  onInit?(props: ComponentBase<T>);
  required?: boolean;
}

export interface InputWithMessageProps<T> extends ComponentBase<T> {
  id: string;
  name: string;
  placeholder?: string;
  containerId: string;
  inputValue?: FidanValue<any>
}
