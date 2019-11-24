import {
  formItems,
  formSchemas,
  IStateFormResources
} from "../../../../../sis/model/state-form";
import { ICrudMusteriFormSchema } from "../types";

export const formItemsICrudMusteriFormSchema: () => {
  [key in keyof ICrudMusteriFormSchema]: IStateFormResources;
} = () => ({
  ad: formItems.string({
    name: "ad",
    label: ""
  }),
  soyad: formItems.string({
    name: "soyad",
    label: ""
  }),
  musteriGrubu: formItems.ref({
    name: "musteriGrubu",
    label: "",
    reference: {
      objectType: "ICrudMusteriGrubuSchema",
      relationType: "many-to-one",
      labelKey: "musterGrubuAdi"
    }
  }),
  ePosta: formItems.string({
    name: "ePosta",
    label: ""
  }),
  evTelefonu: formItems.string({
    name: "evTelefonu",
    label: ""
  }),
  cepTelefonu: formItems.string({
    name: "cepTelefonu",
    label: ""
  }),
  isTelefonu: formItems.string({
    name: "isTelefonu",
    label: ""
  }),
  oncelik: formItems.number({
    name: "oncelik",
    label: ""
  })
});

formSchemas["ICrudMusteriFormSchema"] = formItemsICrudMusteriFormSchema;
