import { withStyles } from "material-ui";
import { Settings } from "http2";
import { Transition } from "@uirouter/react";

export const pageSetup = <T>(
  settings: {
    icon?: any;
    text?: string;
    childsOpen?: boolean;
    classes?: T;
  },
  viewFn: (
    props?: { classes: { [key in keyof T]: string }; transition: Transition }
  ) => any | any
): any => {
  if (!settings) settings = {} as any;
  const icon = settings.icon
    ? React.createElement(
        settings.icon.default ? settings.icon.default : settings.icon
      )
    : null;
  return {
    icon: icon,
    text: settings.text,
    childsOpen: settings.childsOpen,
    component: settings.classes ? withStyles(settings.classes)(viewFn) : viewFn
  };
};
