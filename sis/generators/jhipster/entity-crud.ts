import { format } from "prettier";
import { join } from "path";

const entityNameFormat = (name: string, variable: boolean) => {
  name = name
    .split("_")
    .filter(item => item != "_")
    .map(item => item.substr(0, 1).toUpperCase() + item.substr(1))
    .join("");
  if (variable) name = name.substr(0, 1).toLowerCase() + name.substr(1);
  else name = "ICrud" + name;
  return name;
};

const basicTypeNameMap = {
  localdate: "Date",
  integer: "number"
};

const basicTypeFormat = (typeName: string) => {
  return basicTypeNameMap[typeName] || typeName;
};

export const generateJhipsterEntityCrudCode = (path: string) => {
  const json = require(path);

  const code = `/**
  * @form_state
  * @list_state
  */
 export interface ${entityNameFormat(json.entityTableName, false)} {
   ${json.fields
     .map(field => {
       return (
         field.fieldName +
         `: ${basicTypeFormat(field.fieldType.toLowerCase())};`
       );
     })
     .join("")}
   ${json.relationships
     .map(rel => {
       if (
         rel.relationshipType == "one-to-many" ||
         rel.relationshipType == "one-to-one"
       ) {
         return (
           entityNameFormat(rel.otherEntityName, true) +
           `: ${entityNameFormat(rel.otherEntityName, false)}[];`
         );
       } else
         return `${entityNameFormat(
           rel.otherEntityName,
           true
         )}: ${entityNameFormat(rel.otherEntityName, false)};`;
     })
     .join("")}
 }`;

  return format(code);
};
