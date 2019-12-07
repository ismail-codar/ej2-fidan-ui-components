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

  schema.musteriler.listItems = [
    {
      value: 1,
      label: "Müşteri 1"
    },
    {
      value: 2,
      label: "Müşteri 2"
    },
    {
      value: 3,
      label: "Müşteri 3"
    }
  ];
  schema.musteriler.listWidgetType = "dropdownlist";

  return (
    <Form
      title="Test Form1"
      schema={schema}
      onSubmit={values => console.log(values)}
      fixedInputValues={{
        numericVarRequired: { value: 9999, behaviour: "hidden" }
      }}
    />
  );
};
