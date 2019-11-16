import { generateJhipsterEntityCrudCode } from "./entity-crud";
import * as fs from "fs";
import { join } from "path";

let allCode = `/**
@fileCodeOptions: {
  "modelsPath": "../all-crud-types",
  "stateFormPath": "../../../../../sis/model/state-form"",
  "stateListPath": "../../../../../sis/model/state-list""
}
*/
`;

let hasError = false;
const basePath =
  "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/.jhipster";
const files = fs.readdirSync(basePath);
files.forEach(file => {
  try {
    allCode += "\n";
    allCode += generateJhipsterEntityCrudCode(join(basePath, file));
  } catch (e) {
    console.error("ERROR: " + file);
    hasError = true;
    debugger;
  }
});

if (!hasError) {
  fs.writeFileSync(
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/all-crud-types.ts",
    allCode
  );
}
