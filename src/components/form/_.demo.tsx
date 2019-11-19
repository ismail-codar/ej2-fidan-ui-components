import { Form } from "./form";
import { formItemsICrudMusteriGrubuSchema } from "../crud/crud-musterigrubu/_generated/ICrudMusteriGrubuSchema-formSchema";

export const FormDemo = () => {
  return (
    <Form
      validation={{
        rules: {
          musterGrubuAdi: {
            required: true
          }
        }
      }}
      schema={formItemsICrudMusteriGrubuSchema}
      onSubmit={values => console.log(values)}
      fixedInputValues={{
        numericVarRequired: { value: 9999, behaviour: "hidden" }
      }}
    />
  );
};
