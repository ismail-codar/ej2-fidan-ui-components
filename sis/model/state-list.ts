import { IDataReference } from "./state-form";

export interface IStateListResources {
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
  listItems?: {
    value: any;
    label: string;
  }[];
  format?: string;
  defaultValue: any;
  name: string;
  label: string;
  reference?: IDataReference;
}

const listItemData = (
  defaults: Partial<IStateListResources>,
  options?: Partial<IStateListResources>
): IStateListResources => {
  if (!options.label) options.label = options.name;
  const data: IStateListResources = {
    defaultValue: defaults.defaultValue,
    type: defaults.type,
    format: defaults.format,
    name: options.name || "",
    label: options.label || ""
  };
  for (var key in options) {
    if (typeof options[key] != "object") data[key] = options[key];
  }
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

export const listItems = {
  boolean: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: false,
        type: "boolean"
      },
      options
    );
  },
  string: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: "",
        type: "string"
      },
      options
    );
  },
  number: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: 0,
        type: "number"
      },
      options
    );
  },
  array: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: 0,
        type: "number"
      },
      options
    );
  },
  dateTime: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: new Date(),
        type: "string",
        format: "date-time"
      },
      options
    );
  },
  ref: (options?: Partial<IStateListResources>): IStateListResources => {
    return listItemData(
      {
        defaultValue: null,
        type: "string"
      },
      options
    );
  }
};
export const listSchemas: {
  [key: string]: { [key: string]: IStateListResources };
} = {};
