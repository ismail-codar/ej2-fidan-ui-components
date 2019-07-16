export interface ComponentBase {
  children?: any;
  onInit?<T>(props: T);
}
