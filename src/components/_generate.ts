import * as fs from "fs";
import * as path from "path";

interface GenModel {
  component: string;
  componentOptions?: string;
  model?: string;
  imp: string;
  view?: any;
  deferred?: boolean;
  useId?: boolean;
  importExtra?: string;
  propsExtra?: any;
  TODO?: boolean;
}

const inputWithMessageProps = (type: string, componentName: string) => {
  return {
    importExtra: `import { InputWithMessageProps } from "../_base"`,
    componentOptions: "InputWithMessageProps<" + componentName + ">",
    view: `(<input
    type="${type}"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.value()}
    data-msg-containerid={props.containerId}
  />)`
  }
}

const compnents: GenModel[] = [
  {
    component: "Accordion",
    imp: "ej2-navigations"
  },
  {
    component: "AutoComplete",
    imp: "ej2-dropdowns",
    ...inputWithMessageProps("text", "AutoComplete"),
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
    view: "<button type={props.type}>{props.children}</button>",
    propsExtra: {
      type: "~string~"
    }
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
    importExtra: `import {
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
    component: "Diagram",
    imp: "ej2-diagrams"
  },
  {
    component: "Dialog",
    imp: "ej2-popups"
  },
  {
    component: "DocumentEditorContainer",
    imp: "ej2-documenteditor"
  },
  {
    component: "DropDownList",
    imp: "ej2-dropdowns",
    ...inputWithMessageProps("text", "DropDownList"),
    deferred: true
  },
  {
    component: "FileManager",
    imp: "ej2-filemanager"
  },
  {
    component: "Gantt",
    imp: "ej2-gantt"
  },
  {
    component: "Grid",
    imp: "ej2-grids"
  },
  {
    component: "HeatMap",
    imp: "ej2-heatmap"
  },
  {
    component: "InPlaceEditor",
    imp: "ej2-inplace-editor"
  },
  {
    component: "LinearGauge",
    imp: "ej2-lineargauge"
  },
  {
    component: "ListBox",
    imp: "ej2-dropdowns"
  },
  {
    component: "ListView",
    imp: "ej2-lists"
  },
  {
    component: "Maps",
    imp: "ej2-maps"
  },
  {
    component: "MaskedTextBox",
    imp: "ej2-inputs",
  },
  {
    component: "Menu",
    imp: "ej2-navigations"
  },
  {
    component: "MultiSelect",
    imp: "ej2-dropdowns",
    deferred: true,
    ...inputWithMessageProps("text", "MultiSelect"),
  },
  {
    component: "NumericTextBox",
    imp: "ej2-inputs"
  },
  {
    component: "PdfViewer",
    imp: "ej2-pdfviewer"
  },
  {
    component: "PivotView",
    imp: "ej2-pivotview"
  },
  {
    component: "RadioButton",
    imp: "ej2-buttons",
    ...inputWithMessageProps("radio", "RadioButton"),
    deferred: true
  },
  {
    component: "CheckBox",
    imp: "ej2-buttons",
    ...inputWithMessageProps("checkbox", "CheckBox"),
    deferred: true
  },
  {
    component: "QueryBuilder",
    imp: "ej2-querybuilder"
  },
  {
    component: "RangeNavigator",
    imp: "ej2-charts"
  },
  {
    component: "RichTextEditor",
    imp: "ej2-richtexteditor"
  },
  {
    component: "Schedule",
    imp: "ej2-schedule"
  },
  {
    component: "Sidebar",
    importExtra: `import { SideBarProps } from "./props/SideBarProps"`,
    componentOptions: "SideBarProps",
    imp: "ej2-navigations",
    view: `(
      <aside className={props.sidebarCss || "default-sidebar"}>
        <div className={props.titleHeaderCss || "title-header"}>
          <div style="display:inline-block"> {props.title} </div>
          <span
            id="close"
            className={props.eIconsCss || "e-icons"}
            onClick={() => _component.hide()}
          />
        </div>
        <div className={props.subTitleCss || "sub-title"}>{props.children}</div>
      </aside>
    )`
  },
  {
    component: "Slider",
    imp: "ej2-inputs"
  },
  {
    component: "Smithchart",
    imp: "ej2-charts"
  },
  {
    component: "Sparkline",
    imp: "ej2-charts"
  },
  {
    component: "Splitter",
    imp: "ej2-layouts"
  },
  {
    component: "StockChart",
    imp: "ej2-charts"
  },
  {
    component: "Tab",
    imp: "ej2-navigations"
  },
  {
    component: "TextBox",
    imp: "ej2-inputs",
    ...inputWithMessageProps("text", "TextBox"),
    deferred: true
  },
  {
    component: "Toast",
    imp: "ej2-notifications"
  },
  {
    component: "Toolbar",
    imp: "ej2-navigations"
  },
  {
    component: "TreeView",
    imp: "ej2-navigations"
  },
  {
    component: "Tooltip",
    imp: "ej2-popups"
  },
  {
    component: "TreeGrid",
    imp: "ej2-treegrid"
  },
  {
    component: "TreeMap",
    imp: "ej2-treemap"
  },
  {
    component: "Uploader",
    imp: "ej2-inputs"
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
  const propsExtra = opt.propsExtra
    ? ` & Partial<${JSON.stringify(opt.propsExtra, null, 1)
      .replace(/"~/g, "")
      .replace(/~"/g, "")}>`
    : "";

  return `${opt.componentOptions ? "" : `import { ComponentBase } from "../_base";`}
import { ${cmp}, ${model} } from "@syncfusion/${opt.imp}";
${opt.importExtra || ""}
export const Sf${cmp} = (props: ${model + propsExtra} & ${
    opt.componentOptions ? opt.componentOptions : `ComponentBase<${cmp}>`
    }) => {
  const _view = ${view};

  ${
    deferred
      ? `window.requestAnimationFrame(() => {
    let _component: ${cmp} = new ${cmp}(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });`
      : `let _component: ${cmp} = new ${cmp}(props);
    props._component = _component;
    props._view = _view;
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
