import { Definition, DefinitionOrBoolean } from "typescript-json-schema";
import { FormProps, Form } from "../../components/complex/form/form";

const schema1: Definition = {
  $ref: "#/definitions/DocumentAreaProps",
  definitions: {
    DocumentAreaProps: {
      type: "object",
      properties: {
        tag: {
          type: "string"
        },
        left: {
          type: "number"
        },
        top: {
          type: "number"
        },
        width: {
          type: "number"
        },
        height: {
          type: "number"
        }
      },
      required: ["height", "left", "tag", "top", "width"]
    }
  },
  $schema: "http://json-schema.org/draft-07/schema#"
};

export const DemoForm = () => {
  var form1: FormProps = {
    schema: schema1.definitions.DocumentAreaProps as Definition,
    onSubmit: (values, form) => {
      debugger;
      console.log(values);
    }
  };

  return (
    <div>
      <Form {...form1} />
      <div>
        <button onClick={() => form1.api.submit()} btnPrimary>
          Kaydet
        </button>
      </div>
    </div>
  );
};
