export interface ComponentBase {
  id?: any;
  children?: any;
  onInit?<T>(props: T);
}
