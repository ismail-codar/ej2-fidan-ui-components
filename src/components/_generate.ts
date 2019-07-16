import * as fs from "fs";
import * as path from "path";

interface GenModel {
  component: string;
  model?: string;
  imp: string;
  view?: any;
  deferred?: boolean;
}

const compnents: GenModel[] = [
  {
    component: "AutoComplete",
    imp: "ej2-dropdowns",
    view: '<input type="text" />',
    deferred: true
  },
  {
    component: "Button",
    imp: "ej2-buttons",
    view: "<button>{props.children}</button>"
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
  const view = opt.view || "<div />";
  const deferred = opt.deferred;
  return `import { ${cmp}, ${model} } from "@syncfusion/${opt.imp}";

import { ComponentBase } from "../_base";

export const Sf${cmp} = (props: ${model} & ComponentBase) => {
  const _view = ${view};

  ${
    deferred
      ? `window.requestAnimationFrame(() => {
    let _component: ${cmp} = new ${cmp}(props);
    _component.appendTo(_view);
    props.onInit && props.onInit(props);
  });`
      : `let _component: ${cmp} = new ${cmp}(props);
    _component.appendTo(_view);
    props.onInit && props.onInit(props);`
  }

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
