import { IStateListResources } from "./state-list";

export interface IFormValidation {
  required?: boolean;
  min?: number;
  max?: number;
}

export interface IDataReference {
  labelKey?: string;
  objectType: string;
  relationType: "one-to-many" | "many-to-one" | "one-to-one" | "many-to-many";
  widget?: "grid" | "crud";
}

export interface IStateFormResources {
  hidden?: boolean;
  type:
    | "boolean"
    | "string"
    | "password"
    | "number"
    | "integer"
    | "date"
    | "time"
    | "datetime";
  widgetType?: "toggle" | "text" | "dt-picker" | "slider";
  listWidgetType?:
    | "radiobuttons"
    | "checkboxlist"
    | "autocomplete"
    | "dropdownlist"
    | "multiselect";
  listItems?: {
    value: any;
    label: string;
    checked?: boolean;
    disabled?: boolean;
  }[];
  format?:
    | "date"
    | "time"
    | "date-time"
    | "image-blob"
    | "geo-data"
    | "color-palette";
  defaultValue: any;
  name: string;
  label: string;
  validation: IFormValidation;
  layout: {
    fullWidth: boolean;
    fixWidth?: number;
  };
  reference?: IDataReference;
}

const formItemData = (
  defaults: Partial<IStateFormResources>,
  options?: Partial<IStateFormResources>
): IStateFormResources => {
  if (!options.label) options.label = options.name;
  const data: IStateFormResources = {
    defaultValue: defaults.defaultValue,
    type: defaults.type,
    format: defaults.format,
    validation: {
      required: true
    },
    layout: {
      fullWidth: true
    },
    name: options.name || "",
    label: options.label || ""
  };
  for (var key in options) {
    if (typeof options[key] != "object") data[key] = options[key];
  }
  if (options.validation) Object.assign(data.validation, options.validation);
  if (options.layout) Object.assign(data.layout, options.layout);
  if (options.reference) {
    if (!data.reference)
      data.reference = {
        objectType: null,
        relationType: null,
        labelKey: null
      };
    Object.assign(data.reference, options.reference);
  }
  if (options.listItems) data.listItems = options.listItems;
  return data;
};

export const formItems = {
  boolean: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: false,
        type: "boolean"
      },
      options
    );
  },
  string: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: "",
        type: "string"
      },
      options
    );
  },
  number: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: 0,
        type: "number"
      },
      options
    );
  },
  array: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: 0,
        type: "number"
      },
      options
    );
  },
  dateTime: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: new Date(),
        type: "string",
        format: "date-time"
      },
      options
    );
  },
  ref: (options?: Partial<IStateFormResources>): IStateFormResources => {
    return formItemData(
      {
        defaultValue: null,
        type: "string"
      },
      options
    );
  }
};

export const formSchemas: {
  [key: string]: () => { [key: string]: IStateFormResources };
} = {};
