import * as fs from "fs";
import * as path from "path";

interface GenModel {
  component: string;
  model?: string;
  imp: string;
  view?: any;
}

const compnents: GenModel[] = [
  {
    component: "Button",
    imp: "ej2-buttons",
    view: '<button>{props.children}</button>'
  },
  {
    component: "Accordion",
    imp: "ej2-navigations"
  },
  {
    component: "Tab",
    imp: "ej2-navigations"
  }
];

const generateComponentCode = (opt: GenModel) => {
  const model = opt.model || opt.component + "Model";
  const cmp = opt.component;
  const view = opt.view || '<div />';
  return `import { ${cmp}, ${model} } from "@syncfusion/${opt.imp}";

import { ComponentBase } from "../_base";

export const Sf${cmp}= (props: ${model} & ComponentBase) => {
  const _view = ${view};

  let _component: ${cmp} = new ${cmp}(props);
  _component.appendTo(_view);

  return _view;
};
`;
};

compnents.forEach(cmp => {
  const code = generateComponentCode(cmp);
  const file = path.resolve(__dirname, cmp.component) + ".tsx";
  console.log(file);
  fs.writeFileSync(file, code);
});
