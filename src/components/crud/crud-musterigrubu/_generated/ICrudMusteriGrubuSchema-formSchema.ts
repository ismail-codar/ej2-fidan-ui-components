import {
  formItems,
  formSchemas,
  IStateFormResources
} from "../../../../../../app-packages/sis/model/state-form";
import { ICrudMusteriGrubuSchema } from "../types";

export const formItemsICrudMusteriGrubuSchema: {
  [key in keyof ICrudMusteriGrubuSchema]: IStateFormResources
} = {
  musterGrubuAdi: formItems.string({
    name: "musterGrubuAdi",
    label: ""
  }),
  musteriler: formItems.ref({
    name: "musteriler",
    label: "",
    reference: {
      objectType: "ICrudMusteriFormSchema",
      relationType: "one-to-many",
      labelKey: "musteriGrubu",
      widget: {
        formHandlers: {},
        listHandlers: {}
      }
    }
  })
};

formSchemas["ICrudMusteriGrubuSchema"] = formItemsICrudMusteriGrubuSchema;
