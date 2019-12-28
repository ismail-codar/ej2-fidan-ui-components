import { FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormSchemaType } from './form';
import { value } from '@fidanjs/runtime';

export const formSchemaToEj2ValidatorModel = (schema: FormSchemaType<any>) => {
	const formValidation: FormValidatorModel = {
		rules: {}
	};
	for (var key in schema) {
		const input = schema[key];
		const { validation } = input;
		if (!formValidation.rules[key]) {
			formValidation.rules[key] = {};
		}
		if (validation.required === undefined) {
			validation.required = true;
		}
		// TODO diğer validasyon tipleri...
		formValidation.rules[key].required = validation.required;
	}
	return formValidation;
};

export const setFormSchemaDefaults = (schema: FormSchemaType<any>) => {
	for (var key in schema) {
		const input = schema[key];
		if (!input.type) {
			input.type = 'string';
		}
		if (!input.widgetType) {
			input.widgetType = 'text';
		}
		if (!input.label) {
			input.label = input.name;
		}
		if (input.listItems && !input.listWidgetType) {
			input.listWidgetType = 'dropdownlist';
		}
	}
};

export const setFormValuesDefaults = (schema: FormSchemaType<any>, values: any) => {
	for (var key in schema) {
		if (!values[key]) {
			values[key] = value(undefined);
		}
	}
};
