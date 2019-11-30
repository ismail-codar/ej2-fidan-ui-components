export interface IStateDataAdapter {
  saveForm: (form) => {};
  getForm: (form) => {};
  deleteForm: (form) => {};
  getList: (query) => {};
}
