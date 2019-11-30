/**
@fileCodeOptions: {
  "modelsPath": "../types",
  "stateFormPath": "../../../../../sis/model/state-form",
  "stateListPath": "../../../../../sis/model/state-list"
}
*/
import { ICrudMusteriGrubuSchema } from "../crud-musterigrubu/types";

export interface ICrudMusteriViewStyles {
  root;
}

export interface ICrudMusteriHandlers {}

/**
 * @form_state
 * @list_state
 */
export interface ICrudMusteriFormSchema {
  ad: string;
  soyad: string;
  musteriGrubu: ICrudMusteriGrubuSchema;
  ePosta: string;
  evTelefonu: string;
  cepTelefonu: string;
  isTelefonu: string;
  oncelik: number;
}

export interface ICrudMusteriState {}

// export const CrudMusteri = withPureComponent<
//   ICrudMusteriState,
//   ICrudMusteriHandlers,
//   ICrudMusteriViewStyles
// >({
//   view: CrudMusteriView,
//   styles: crudMusteriStyles,
//   initialState: () => ({ form: { schema: null } }),
//   handlers: {}
// });
