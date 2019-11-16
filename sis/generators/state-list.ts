import { JSONSchema4 } from "json-schema";
import { format } from "prettier";

import { stateCodeRun } from "./state-generator";

const commentTagName = "@" + "list_state";

const generateStateListCode = (
  def: JSONSchema4,
  definitionName: string,
  definitions,
  options
) => {
  const str = `
    import { listItems, listSchemas, IStateListResources } from '${
      options.stateListPath
    }';
    import { ${definitionName} } from '${options.modelsPath}';
    
    export const listItems${definitionName}: {
      [key in keyof ${definitionName}]: IStateListResources
    } = {
      ${Object.keys(def.properties).map(key => {
        const property: JSONSchema4 = def.properties[key];
        const isDate = property.$ref && property.$ref.endsWith("/Date");

        if (property.$ref && !isDate) {
          return `${key}:listItems.ref({
            name: "${key}",
            label: "",
            reference: {
              objectType: "${property.$ref.substr(14)}",
              relationType: "many-to-one"
            }
          })`;
        } else if (property.type == "array") {
          return `${key}:listItems.ref({
            name: "${key}",
            label: "",
            reference: {
              objectType: "${(property.items as JSONSchema4).$ref.substr(14)}",
              relationType: "one-to-many"
            }
          })`;
        }
        let propertyType = isDate ? "dateTime" : property.type.toString();
        let validations = "";
        let listItems = "";
        let stringListat = "";
        if (def.required instanceof Array) {
          if (def.required.includes(key) === false)
            validations = `validation:{
          required: false
        },`;
        }
        if (property.enum) {
          listItems =
            "listItems: " +
            JSON.stringify(
              property.enum.map(enm => ({
                value: enm,
                label: enm.toString()
              })),
              null,
              1
            ) +
            ",";
        }
        if (property.listat === "date-time") {
          propertyType = "dateTime";
        }
        return `${key}: listItems.${propertyType}({ ${validations} ${listItems} 
                name: "${key}",
                label: ""
              })`;
      })}
    };

    listSchemas["${definitionName}"] = listItems${definitionName};
    `;

  return format(str, { parser: "typescript" });
};

export const stateListRun = (path?: string) => {
  stateCodeRun(commentTagName, generateStateListCode, "-listSchema.ts", path);
};

stateListRun(
  "/Users/macbook/DEV/general-repo/appid/src/components/crud/crud-musteri/types.ts"
);
