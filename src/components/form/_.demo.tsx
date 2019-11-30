import { Form } from "./form";
import { formItemsICrudMusteriGrubuSchema } from "../crud/crud-musterigrubu/_generated/ICrudMusteriGrubuSchema-formSchema";
import { pouchDbAdapter } from "../../../sis/services/pdb-adapter";

export const FormDemo = () => {
  const dataAdapter = pouchDbAdapter();
  const schema = formItemsICrudMusteriGrubuSchema();

  schema.musterGrubuAdi.validation = {
    required: true
  };
  schema.musterGrubuAdi.label = "Müşteri Grubu Adı";

  schema.musteriler.widgetType = "grid"; // TODO reference dan otomatik almalı
  schema.musteriler.reference = {
    objectType: "ICrudMusteriGrubuSchema",
    relationType: "one-to-many",
    labelKey: "musterGrubuAdi"
  };

  return (
    <Form
      title="Test Form1"
      dataAdapter={dataAdapter}
      schema={schema}
      onSubmit={values => console.log(values)}
      fixedInputValues={{
        numericVarRequired: { value: 9999, behaviour: "hidden" }
      }}
    />
  );
};
