export type PageRouteSettingValueType = {
  path: string;
  name: string;
  page: {
    text?: string;
    icon?: React.ReactElement<any>;
    component?: any;
    childsOpen?: boolean;
  };
  childs?: PageRouteSettingsType;
  order?: number;
};

export type PageRouteSettingsType = {
  [key: string]: PageRouteSettingValueType;
};
