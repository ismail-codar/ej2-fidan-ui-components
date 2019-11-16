import { JSONSchema4 } from "json-schema";
import { format } from "prettier";

import { stateCodeRun } from "./state-generator";

const REF_STR_DEFINITONS_LENGTH = 14;
const commentTagName = "@" + "form_state";

const oneToManyLabelKey = (definitionName, ref, definitions) => {
  const referenceDef = definitions[ref];
  for (var key in referenceDef.properties) {
    if (
      referenceDef.properties[key].$ref &&
      referenceDef.properties[key].$ref.endsWith(definitionName)
    ) {
      return key;
    }
  }
  return "";
};

const manyToOneLabelKey = (definitionName, referenceDef) => {
  for (var key in referenceDef.properties) {
    if (!referenceDef.properties[key].items) {
      return key; //NOT yaklaşık olarak .items.$ref i içermeyen ilk property comboda başlık olur gibi bulunuyor.
    }
  }
  throw "manyToOneLabelKey not found in defininition:" + definitionName;
};

const generateStateFormCode = (
  def: JSONSchema4,
  definitionName: string,
  definitions,
  options
) => {
  const str = `
    import { formItems, formSchemas, IStateFormResources } from '${
      options.stateFormPath
    }';
    import { ${definitionName} } from '${options.modelsPath}';
    
    export const formItems${definitionName}: {
      [key in keyof ${definitionName}]: IStateFormResources
    } = {
      ${Object.keys(def.properties).map(key => {
        let property: JSONSchema4 = def.properties[key];
        const isDate = property.$ref && property.$ref.endsWith("/Date");

        if (property.$ref && !isDate) {
          const referenceDef =
            definitions[property.$ref.substr(REF_STR_DEFINITONS_LENGTH)];
          if (referenceDef.enum) property = referenceDef;
          else
            return `${key}:formItems.ref({
            name: "${key}",
            label: "",
            reference: {
              objectType: "${property.$ref.substr(REF_STR_DEFINITONS_LENGTH)}",
              relationType: "many-to-one",
              labelKey: "${manyToOneLabelKey(definitionName, referenceDef)}"
            }
          })`;
        } else if (property.type == "array") {
          const propertyItems = property.items as JSONSchema4;
          return `${key}:formItems.ref({
            name: "${key}",
            label: "",
            reference: {
              objectType: "${propertyItems.$ref.substr(
                REF_STR_DEFINITONS_LENGTH
              )}",
              relationType: "one-to-many",
              labelKey: "${oneToManyLabelKey(
                definitionName,
                propertyItems.$ref.substr(REF_STR_DEFINITONS_LENGTH),
                definitions
              )}",
              widget: {
                formHandlers: {},
                listHandlers: {}
              }
            }
          })`;
        }
        let propertyType = isDate
          ? "dateTime"
          : property.type
          ? property.type.toString()
          : "string"; //TODO any
        let validations = "";
        let listItems = "";
        let stringFormat = "";
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
        if (property.format === "date-time" || isDate) {
          propertyType = "dateTime";
        }
        return `${key}: formItems.${propertyType}({ ${validations} ${listItems} 
                name: "${key}",
                label: ""
              })`;
      })}
    };
    
    formSchemas["${definitionName}"] = formItems${definitionName};
    `;

  return format(str, { parser: "typescript" });
};

export const stateFormRun = (path?: string) => {
  stateCodeRun(commentTagName, generateStateFormCode, "-formSchema.ts", path);
};

stateFormRun(
  "/Users/macbook/DEV/general-repo/appid/src/components/crud/crud-musteri/types.ts"
);
stateFormRun(
  "/Users/macbook/DEV/general-repo/appid/src/components/crud/crud-musterigrubu/types.ts"
);
