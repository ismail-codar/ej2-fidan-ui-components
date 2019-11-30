import * as fs from "fs";
import { join } from "path";
import { format } from "prettier";

const generateJhipsterEntityCrudPageCode = (fileName: string) => {
  const json = require(join(basePath, fileName) + ".json");
  return `import { pageSetup } from "../../../../app-packages/sis/services/react/page";
  import { StateCrud } from "../../../../app-packages/sis/components/react/state-crud/types";
  import { formItemsICrud${fileName} } from "../_generated/ICrud${fileName}-formSchema";
  import { listItemsICrud${fileName} } from "../_generated/ICrud${fileName}-listSchema";
  
  export = pageSetup(
    {
      icon: require("@material-ui/icons/AccessAlarm")
    },
    () => {
      return (
        <div>
          <StateCrud
            restUrl={"${json.entityTableName}"}
            handlers={{} as any}
            form={{
              schema: formItemsICrud${fileName},
              handlers: {} as any,
              editId: { value: null },
              isDirtyForm: { value: null }
            }}
            list={{
              schema: listItemsICrud${fileName},
              handlers: {} as any,
              rows: []
            }}
          />
        </div>
      );
    }
  );
  `;
};

const generateAllCrudItems = (files: string[]) => {
  return (
    files
      .map(file => {
        return `import "../src/_generated/ICrud${file}-formSchema";
    import "../src/_generated/ICrud${file}-listSchema";`;
      })
      .join("") +
    `
  
  export const restCrudApiUrl = {
    ${files
      .map(file => {
        return `ICrud${file}: "${
          require(join(basePath, file) + ".json").entityTableName
        }"`;
      })
      .join(",")}
  };
  `
  );
};

const basePath =
  "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/.jhipster";
const destPath =
  "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages";
const files = fs
  .readdirSync(basePath)
  .map(file => file.substr(0, file.length - 5));

////////////////////////////////////// generate //////////////////////////////////////
files.forEach(file => {
  console.log(file);
  const pageCode = generateJhipsterEntityCrudPageCode(file);
  // TODO HEDEF DOSYA ALT KLASÖRLERDE DE OLSA ONU BULUP ÜZERİNE YAZ....
  fs.writeFileSync(
    join(destPath, file.toLowerCase()) + ".tsx",
    format(pageCode, { parser: "typescript" })
  );
});
const allCrudItemsCode = generateAllCrudItems(files);
fs.writeFileSync(
  join(destPath, "../", "all-crud-items.ts"),
  format(allCrudItemsCode, { parser: "typescript" })
);
