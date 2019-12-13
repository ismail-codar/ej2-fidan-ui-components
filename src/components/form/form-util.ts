import { FormValidatorModel } from "@syncfusion/ej2-inputs";
import { StateFormDataType } from "./form";
import { IStateFormResources } from "../../../sis/model/state-form";

export const formSchemaToEj2ValidatorModel = (
  schema: StateFormDataType<any>
) => {
  const formValidation: FormValidatorModel = {
    rules: {}
  };
  for (var key in schema) {
    const input = schema[key];
    const { validation } = input;
    if (!formValidation.rules[key]) {
      formValidation.rules[key] = {};
    }
    // TODO diğer validasyon tipleri...
    formValidation.rules[key].required = validation.required;
  }
  return formValidation;
};

export const setFormSchemaDefaults = (schema: StateFormDataType<any>) => {
  for (var key in schema) {
    const input = schema[key];
    if (!input.type) {
      input.type = "string";
    }
    if (!input.widgetType) {
      input.widgetType = "text";
    }
    if (!input.label) {
      input.label = input.name;
    }
  }
};
