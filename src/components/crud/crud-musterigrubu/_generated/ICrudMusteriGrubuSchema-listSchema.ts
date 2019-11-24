import {
  listItems,
  listSchemas,
  IStateListResources
} from "../../../../../sis/model/state-list";
import { ICrudMusteriGrubuSchema } from "../types";

export const listItemsICrudMusteriGrubuSchema: () => {
  [key in keyof ICrudMusteriGrubuSchema]: IStateListResources;
} = () => ({
  musterGrubuAdi: listItems.string({
    name: "musterGrubuAdi",
    label: ""
  }),
  musteriler: listItems.ref({
    name: "musteriler",
    label: "",
    reference: {
      objectType: "ICrudMusteriFormSchema",
      relationType: "one-to-many"
    }
  })
});

listSchemas["ICrudMusteriGrubuSchema"] = listItemsICrudMusteriGrubuSchema;
