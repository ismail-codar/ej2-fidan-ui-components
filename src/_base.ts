export interface ComponentBase<T> {
  id?: any;
  children?: any;
  _component?: T;
  _view?: HTMLElement;
  onInit?(props: ComponentBase<T>);
}
