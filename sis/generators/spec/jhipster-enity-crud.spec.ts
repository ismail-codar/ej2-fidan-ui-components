import { generateJhipsterEntityCrudCode } from "../jhipster/entity-crud";
import { format } from "prettier";

// it("test1", () => {
//   const code = generateJhipsterEntityCrudCode(
//     "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/.jhipster/MusteriGrubu.json"
//   );

//   console.log(code);

//   expect(code).toBe(
//     format(`/**
//     * @form_state
//     * @list_state
//     */
//    export interface ICrudMusteriGrubuSchema {
//      musterGrubuAdi: string;
//      musteri: ICrudMusteriSchema[];
//    }`)
//   );
// });

it("test1", () => {
  const code = generateJhipsterEntityCrudCode(
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/.jhipster/Musteri.json"
  );

  console.log(code);
});
