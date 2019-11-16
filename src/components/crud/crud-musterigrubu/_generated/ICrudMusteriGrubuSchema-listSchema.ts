import {
  listItems,
  listSchemas,
  IStateListResources
} from "../../../../../../app-packages/sis/model/state-list";
import { ICrudMusteriGrubuSchema } from "../types";

export const listItemsICrudMusteriGrubuSchema: {
  [key in keyof ICrudMusteriGrubuSchema]: IStateListResources
} = {
  musterGrubuAdi: listItems.string({
    name: "musterGrubuAdi",
    label: ""
  }),
  musteriler: listItems.ref({
    name: "musteriler",
    label: "",
    reference: {
      objectType: "ICrudMusteriFormSchema",
      relationType: "one-to-many",
      labelKey: "musterGrubuAdi"
    }
  })
};

listSchemas["ICrudMusteriGrubuSchema"] = listItemsICrudMusteriGrubuSchema;
