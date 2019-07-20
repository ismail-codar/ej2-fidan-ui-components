import * as fs from "fs";
import * as path from "path";

interface GenModel {
  component: string;
  model?: string;
  imp: string;
  view?: any;
  deferred?: boolean;
  useId?: boolean;
  importExtra?: string;
  TODO?: boolean;
}

const compnents: GenModel[] = [
  {
    component: "Accordion",
    imp: "ej2-navigations"
  },
  {
    component: "AutoComplete",
    imp: "ej2-dropdowns",
    view: '<input type="text" />',
    deferred: true
  },
  {
    component: "Avatar",
    imp: "ej2-",
    view: "",
    TODO: true
  },
  {
    component: "Badge",
    imp: "ej2-",
    view: "",
    TODO: true
  },
  {
    component: "BarcodeGenerator",
    imp: "ej2-barcode-generator",
    deferred: true,
    useId: true
  },
  {
    component: "Button",
    imp: "ej2-buttons",
    view: "<button>{props.children}</button>"
  },
  {
    component: "Calendar",
    imp: "ej2-calendars",
    deferred: true
  },
  {
    component: "Card",
    imp: "ej2-",
    view: "",
    TODO: true
  },
  {
    component: "Chart",
    imp: "ej2-charts/dist/es6/ej2-charts.es5.js",
    importExtra: `
import {
  AreaSeries,
  DateTime,
  Legend
} from "@syncfusion/ej2-charts/dist/es6/ej2-charts.es2015.js";
Chart.Inject(AreaSeries, DateTime, Legend);`
  },
  {
    component: "ChipList",
    imp: "ej2-buttons"
  },
  {
    component: "CircularGauge",
    imp: "ej2-circulargauge"
  },
  {
    component: "ColorPicker",
    imp: "ej2-inputs",
    deferred: true
  },
  {
    component: "ComboBox",
    imp: "ej2-dropdowns",
    deferred: true
  },
  {
    component: "ContextMenu",
    imp: "ej2-navigations",
    view: "<ul />",
    deferred: true
  },
  {
    component: "DashboardLayout",
    imp: "ej2-layouts",
    deferred: true
  },
  {
    component: "DatePicker",
    imp: "ej2-calendars",
    view: '<input type="text" />',
    deferred: true
  },
  {
    component: "DateRangePicker",
    view: '<input type="text" />',
    imp: "ej2-calendars",
    deferred: true
  },
  {
    component: "DateTimePicker",
    view: '<input type="text" />',
    imp: "ej2-calendars",
    deferred: true
  },
  {
    component: "TimePicker",
    view: '<input type="text" />',
    imp: "ej2-calendars",
    deferred: true
  },
  {
    component: "Tab",
    imp: "ej2-navigations"
  }
];

const generateComponentCode = (opt: GenModel) => {
  const model = opt.model || opt.component + "Model";
  const cmp = opt.component;
  let view = opt.view || "<div>{props.children}</div>";
  if (opt.useId) {
    view = view.replace(">", " id={props.id || Math.random()}>");
  }
  const deferred = opt.deferred;
  return `import { ${cmp}, ${model} } from "@syncfusion/${
    opt.imp
  }"${opt.importExtra || ""};

import { ComponentBase } from "../_base";

export const Sf${cmp} = (props: ${model} & ComponentBase) => {
  const _view = ${view};

  ${
    deferred
      ? `window.requestAnimationFrame(() => {
    let _component: ${cmp} = new ${cmp}(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });`
      : `let _component: ${cmp} = new ${cmp}(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);`
  }

  return _view;
};
`;
};

compnents.forEach(cmp => {
  if (cmp.TODO) return;
  const code = generateComponentCode(cmp);
  const file = path.resolve(__dirname, cmp.component) + ".tsx";
  console.log(file);
  fs.writeFileSync(file, code);
});
