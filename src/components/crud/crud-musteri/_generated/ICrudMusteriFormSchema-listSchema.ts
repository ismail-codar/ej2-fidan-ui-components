import {
  listItems,
  listSchemas,
  IStateListResources
} from "../../../../../sis/model/state-list";
import { ICrudMusteriFormSchema } from "../types";

export const listItemsICrudMusteriFormSchema: () => {
  [key in keyof ICrudMusteriFormSchema]: IStateListResources;
} = () => ({
  ad: listItems.string({
    name: "ad",
    label: ""
  }),
  soyad: listItems.string({
    name: "soyad",
    label: ""
  }),
  musteriGrubu: listItems.ref({
    name: "musteriGrubu",
    label: "",
    reference: {
      objectType: "ICrudMusteriGrubuSchema",
      relationType: "many-to-one"
    }
  }),
  ePosta: listItems.string({
    name: "ePosta",
    label: ""
  }),
  evTelefonu: listItems.string({
    name: "evTelefonu",
    label: ""
  }),
  cepTelefonu: listItems.string({
    name: "cepTelefonu",
    label: ""
  }),
  isTelefonu: listItems.string({
    name: "isTelefonu",
    label: ""
  }),
  oncelik: listItems.number({
    name: "oncelik",
    label: ""
  })
});

listSchemas["ICrudMusteriFormSchema"] = listItemsICrudMusteriFormSchema;
