import { Form } from "./form";
import { formItemsICrudMusteriGrubuSchema } from "../crud/crud-musterigrubu/_generated/ICrudMusteriGrubuSchema-formSchema";
import { pouchDbAdapter } from "../../../sis/services/pdb-adapter";
import { formItemsICrudMusteriFormSchema } from "../crud/crud-musteri/_generated/ICrudMusteriFormSchema-formSchema";
import { listItemsICrudMusteriFormSchema } from "../crud/crud-musteri/_generated/ICrudMusteriFormSchema-listSchema";
import { SfButton } from "../../ej2-fidan-ui/components/Button";

formItemsICrudMusteriFormSchema;
listItemsICrudMusteriFormSchema;

export const FormDemo = () => {
  const dataAdapter = pouchDbAdapter();
  const schema = formItemsICrudMusteriGrubuSchema();

  schema.musterGrubuAdi.validation = {
    required: false
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
  schema.musteriler.listWidgetType = "checkboxlist";

  return (


    <div className="content-wrapper">
      <div className="form-title">
        <span>Test Form1</span>
      </div>
      <Form
        schema={schema}
        onSubmit={values => console.log(values)}
        onInit={({ _component: form }) => {
        }}
      >
        <div className="row">
          <div style="width: 320px;margin:0px auto;height: 100px;padding-top: 25px;">
            <SfButton type="reset">Temizle</SfButton>
            <SfButton isPrimary={true}>Kaydet</SfButton>
          </div>
        </div>
      </Form>
      <SfButton isPrimary={true} onInit={
        ({ _component: btn }) => {
          btn.element.addEventListener("click", (e) => {
            console.log(e)
          })
        }
      }>Demo Data</SfButton>

    </div>

  );
};
