import './form-styles.scss';
import { IStateFormResources } from '../../../utils/state-form';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { formSchemaToEj2ValidatorModel, setFormSchemaDefaults, setFormValuesDefaults } from './form-util';
import { FidanValue } from '@fidanjs/runtime';
import { formSingularInput } from './form-singular-inputs';
import { formListInput } from './form-list-inputs';
import { domIsVisible } from '../../../utils/dom-util';
import { ComponentBase, setupComponentView } from '../../../_base';

export type FormSchemaType<T> = { [key in keyof T]: IStateFormResources<any> };

export interface FormModel<T> {
	schema: FormSchemaType<T>;
	// values?: { [key in keyof T]?: FidanValue<T[keyof T]> };
	values: { [key in keyof T]?: FidanValue<any> };
	fromJSON?: (
		values: {
			[key in keyof T]?:
				| T[keyof T]
				| { value: T[keyof T]; label: string }
				| { value: T[keyof T]; label: string }[]
		}
	) => void;
	toJSON?: () => { [key in keyof T]?: T[keyof T] };
}

export interface FormComponent {
	validator: FormValidator;
	onValidated?: (isValid) => void;
	onValidSubmit?: () => void;
}

export interface FormGroupProps extends ComponentBase<any> {
	input: IStateFormResources<any>;
	value: FidanValue<any>;
}

export const Form = (props: { data: FormModel<any> } & ComponentBase<FormComponent>) => {
	if (!props.data.values) {
		props.data.values = {};
	}
	const { schema, values } = props.data;
	setFormSchemaDefaults(schema);
	setFormValuesDefaults(schema, values);
	const inputKeys = Object.keys(schema);

	const view: HTMLFormElement = (
		<form className="form-horizontal" novalidate="">
			{inputKeys
				.map((inputKey) => {
					const input = schema[inputKey];
					if (input.hidden) {
						return undefined;
					}
					const containerId = 'fg_' + Math.random().toString(36).substr(2);

					let inputView = null;
					const inputProp = { input, value: values[inputKey] };
					if (input.listItems) {
						inputView = formListInput(inputProp, containerId);
					} else {
						inputView = formSingularInput(inputProp, containerId);
					}
					return (
						<div className="form-group">
							{inputView} <div id={containerId} />
						</div>
					);
				})
				.filter((item) => item !== undefined)}
			{props.children}
		</form>
	);
	var validator = new FormValidator(view, formSchemaToEj2ValidatorModel(schema));
	setupComponentView(view, props, {
		validator
	});

	validator.addEventListener('validationComplete', (args) => {
		if (props._component.onValidated) {
			const errorElements = Array.from<HTMLElement>(view.querySelectorAll('.e-error'));
			const hasError = errorElements.find((item) => domIsVisible(item)) !== undefined;
			props._component.onValidated(hasError === false);
		}
	});
	view.addEventListener('submit', function(e) {
		e.preventDefault();
		if (validator.validate()) {
			props._component.onValidSubmit && props._component.onValidSubmit();
		}
	});

	props.data.fromJSON = (obj) => {
		for (var key in values) {
			values[key](obj[key]);
		}
	};
	props.data.toJSON = () => {
		const obj = {};
		for (var key in values) {
			const val = values[key]();
			if (!schema[key].noValue) {
				obj[key] = values[key]();
			}
		}
		return obj;
	};

	return view;
};
