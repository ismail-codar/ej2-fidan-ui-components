export interface ComponentBase<T> {
  id?: any;
  children?: any;
  component?: T;
  onInit?(props: ComponentBase<T>);
}
