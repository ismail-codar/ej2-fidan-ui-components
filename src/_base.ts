export interface ComponentBase<T> {
  id?: any;
  children?: any;
  _component?: T;
  _view?: HTMLElement;
  onInit?(props: ComponentBase<T>);
}

export interface InputWithMessageProps<T> extends ComponentBase<T> {
  id: string;
  name: string;
  placeholder?: string;
  containerId: string;
  required: boolean;
}
