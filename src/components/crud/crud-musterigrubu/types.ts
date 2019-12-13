/**
@fileCodeOptions: {
  "modelsPath": "../types",
  "stateFormPath": "../../../../../sis/model/state-form",
  "stateListPath": "../../../../../sis/model/state-list"
}
*/
import { ICrudMusteriFormSchema } from "../crud-musteri/types";

export interface ICrudMusteriViewStyles {
  root;
}

export interface ICrudMusteriHandlers {}

/**
 * @form_state
 * @list_state
 */
export interface ICrudMusteriGrubuSchema {
  musterGrubuAdi: string;
  musteriler: ICrudMusteriFormSchema[];
}

export interface ICrudMusteriState {}

// export const CrudMusteriGrubu = withPureComponent<
//   ICrudMusteriState,
//   ICrudMusteriHandlers,
//   ICrudMusteriViewStyles
// >({
//   view: CrudMusteriView,
//   styles: crudMusteriStyles,
//   initialState: () => ({ form: { schema: null } }),
//   handlers: {}
// });
