import { CrudMusteri } from './types';

const componentDemo = (data: any) => (
  <div>
    <span>{__filename}</span>
    <hr />
    <CrudMusteri />
  </div>
);

export = () => {
  return {
    "Demo 1": componentDemo({})
  };
};
