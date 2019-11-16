import { fileTypeToJson } from "../tsjs";

it("tsjs fileTypeToJson", () => {
  let json = null;

  // json = fileTypeToJson(
  //   "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/components/crud-musteri/types.ts",
  //   "ICrudMusteriFormSchema"
  // );
  // console.log(JSON.stringify(json, null, 1));

  json = fileTypeToJson(
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/components/crud-musterigrubu/types.ts",
    "ICrudMusteriGrubuSchema"
  );
  console.log(JSON.stringify(json, null, 1));
});
