import { Form } from "./form";
import { formItemsICrudMusteriGrubuSchema } from "../crud/crud-musterigrubu/_generated/ICrudMusteriGrubuSchema-formSchema";
import { pouchDbAdapter } from "../../../sis/services/pdb-adapter";
import { formItemsICrudMusteriFormSchema } from "../crud/crud-musteri/_generated/ICrudMusteriFormSchema-formSchema";
import { listItemsICrudMusteriFormSchema } from "../crud/crud-musteri/_generated/ICrudMusteriFormSchema-listSchema";

formItemsICrudMusteriFormSchema;
listItemsICrudMusteriFormSchema;

export const FormDemo = () => {
  const dataAdapter = pouchDbAdapter();
  const schema = formItemsICrudMusteriGrubuSchema();

  schema.musterGrubuAdi.validation = {
    required: true
  };
  schema.musterGrubuAdi.label = "Müşteri Grubu Adı";

  schema.musteriler.widgetType = "grid"; // TODO reference dan otomatik almalı

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
