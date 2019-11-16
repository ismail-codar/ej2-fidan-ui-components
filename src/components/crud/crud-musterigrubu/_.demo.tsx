import { CrudMusteriGrubu } from "./types";

const componentDemo = (data: any) => (
  <div>
    <span>{__filename}</span>..
    <hr />
    <CrudMusteriGrubu />
  </div>
);

export = () => {
  return {
    "Demo 1": componentDemo({})
  };
};
