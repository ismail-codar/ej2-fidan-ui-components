import { FormGroupProps } from './form';
import { SfTextBox } from '../../TextBox';
import { Component } from '@syncfusion/ej2-base';
import { SfMaskedTextBox } from '../../MaskedTextBox';
import { SfNumericTextBox } from '../../NumericTextBox';
import { SfDatePicker } from '../../DatePicker';
import { SfDateTimePicker } from '../../DateTimePicker';
import { SfTimePicker } from '../../TimePicker';
import { SfDateRangePicker } from '../../DateRangePicker';

export const singularInputOnInit = (props: FormGroupProps) => ({ _component, _view }) => {
	const singularInput: Component<any> & { value: any } = _component;
	let readOnlyProp = 'component';
	props.input[readOnlyProp] = _component;
	readOnlyProp = 'view';
	props.input[readOnlyProp] = _view;
	const element = singularInput.element as HTMLInputElement;
	element.name = props.input.name;
	singularInput.value = props.value();

	props.value.depends((val) => {
		if (val !== undefined && singularInput.value !== val) {
			singularInput.value = val;
		}
	});

	singularInput.addEventListener('change', (arg) => {
		const newValue = arg.maskedValue || arg.value;
		if (props.value() !== newValue) {
			props.value(newValue);
		}
	});
};

export const formSingularInput = (props: FormGroupProps, containerId: string) => {
	const { input } = props;
	const { name, label, type, widgetType, inputProps } = input;
	let Component = null;
	switch (type) {
		case 'string':
			if (widgetType === 'maskedinput') {
				Component = SfMaskedTextBox;
				break;
			} else if (widgetType === 'date-picker') {
				Component = SfDatePicker;
				break;
			} else if (widgetType === 'datetime-picker') {
				Component = SfDateTimePicker;
				break;
			} else if (widgetType === 'time-picker') {
				Component = SfTimePicker;
				break;
			} else if (widgetType === 'daterange-picker') {
				Component = SfDateRangePicker;
				break;
			} else if (widgetType === 'textarea') {
				Component = SfTextBox;
				inputProps.multiline = 3;
				inputProps.rows = 3;
				break;
			}
			Component = SfTextBox;
			break;
		case 'number':
			Component = SfNumericTextBox;
			break;
		default:
			Component = () => 'TODO formSingularInput ' + type;
			break;
	}

	return (
		<Component
			id={name}
			name={name}
			placeholder={label}
			containerId={containerId}
			floatLabelType="Auto"
			inputValue={props.value}
			didMount={singularInputOnInit(props)}
			{...inputProps}
		/>
	);
};
