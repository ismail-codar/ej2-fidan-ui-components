import { FormGroupProps } from './form';
import { SfMultiSelect } from '../../MultiSelect';
import { SfRadioButton } from '../../RadioButton';
import { SfCheckBox } from '../../CheckBox';
import { SfAutoComplete } from '../../AutoComplete';
import { SfDropDownList } from '../../DropDownList';
import { DropDownBase } from '@syncfusion/ej2-dropdowns';
import { Component } from '@syncfusion/ej2-base';

const componentValue = (val, useLabelValue: boolean) => {
	if (val === null) {
		return null;
	}
	return useLabelValue ? (Array.isArray(val) ? val.map((item) => item.value) : val.value) : val;
};

const setPropValue = (props: FormGroupProps, dataSource, val) => {
	if (props.input.useLabelValue) {
		if (Array.isArray(val)) {
			const selectedItems = dataSource
				.filter((item) => val.indexOf(item.value) !== -1)
				.map((item) => ({ label: item.label, value: item.value }));
			props.value(selectedItems);
		} else {
			const selectedItem = dataSource.find((item) => item.value === val);
			props.value({ label: selectedItem.label, value: selectedItem.value });
		}
	} else {
		props.value(val);
	}
};

const dropdownOnInit = (props: FormGroupProps, dataSource: { value: any; label: string }[]) => ({
	_component,
	_view
}) => {
	const dropdown: DropDownBase & { value: any } = _component;
	let readOnlyProp = 'component';
	props.input[readOnlyProp] = _component;
	readOnlyProp = 'view';
	props.input[readOnlyProp] = _view;
	const element = dropdown.element as HTMLInputElement;
	element.name = props.input.name;
	dropdown.value = componentValue(props.value(), props.input.useLabelValue);

	props.value.depends([
		(val) => {
			val = componentValue(val, props.input.useLabelValue);
			if (val !== undefined && dropdown.value !== val) {
				dropdown.value = val;
			}
		}
	]);

	dropdown.addEventListener('change', () => {
		const propValue = props.value();
		const val = componentValue(propValue, props.input.useLabelValue);
		if (val !== dropdown.value) {
			setPropValue(props, dataSource, dropdown.value);
		}
	});

	dropdown.addEventListener('blur', () => {
		if (dropdown.value != null) {
			element.value = []
				.concat(dropdown.value)
				.map((val) => {
					return dataSource.find((item) => item.value === val).label;
				})
				.join(', ');
		}
		element.dispatchEvent(new Event('focusout'));
	});

	props.input.listItems.depends([
		(val) => {
			dropdown.dataSource = val;
			dataSource = dropdown.dataSource as any;
		}
	]);
};

const singularListItemCheck = (
	propValue: any,
	listItems: any[],
	singularListItem: Component<any> & { value: any; checked: boolean }
) => {
	singularListItem.checked = false;
	if (Array.isArray(propValue)) {
		//checkbox
		const idx = listItems.findIndex((item) => item.value.toString() === singularListItem.element.value);
		if (propValue.indexOf(listItems[idx].value) !== -1) {
			singularListItem.checked = true;
		}
	} else {
		//radio
		const idx = listItems.findIndex((item) => item.value.toString() === singularListItem.element.value);
		if (listItems[idx].value === propValue) {
			singularListItem.checked = true;
		}
	}
};

const singularListItemOnInit = (props: FormGroupProps, item: { value: any; label: string; component? }) => ({
	_component,
	_view
}) => {
	const singularListItem: Component<any> & { value: any; checked: boolean } = _component;
	item.component = _component;
	let readOnlyProp = 'component';
	props.input[readOnlyProp] = _component;
	readOnlyProp = 'view';
	props.input[readOnlyProp] = _view;
	const element = singularListItem.element as HTMLInputElement;
	element.name = props.input.name;
	const propValue = componentValue(props.value(), props.input.useLabelValue);

	const listItems = props.input.listItems();
	singularListItemCheck(propValue, listItems, singularListItem);

	props.value.depends([
		(val) => {
			val = componentValue(val, props.input.useLabelValue);
			if (val !== undefined && val !== singularListItem.value) {
				singularListItemCheck(val, props.input.listItems(), singularListItem);
			}
		}
	]);

	singularListItem.addEventListener('change', ({ event }) => {
		const target: HTMLInputElement = event.target;
		const listItem = props.input.listItems().find((item) => item.value.toString() === target.value);
		if (Array.isArray(propValue)) {
			if (target.checked) {
				propValue.push(listItem.value);
			} else {
				const idx = propValue.findIndex((item) => item === listItem.value);
				propValue.splice(idx, 1);
			}
			setPropValue(props, props.input.listItems(), propValue);
		} else if (propValue !== singularListItem.value) {
			singularListItem.value = listItem.value;
			setPropValue(props, props.input.listItems(), singularListItem.value);
		}
	});
};

export const formListInput = (props: FormGroupProps, containerId: string) => {
	const { input } = props;
	const { name, label, listWidgetType, inputProps, listItems } = input;

	switch (listWidgetType) {
		case 'multiselect':
			var dataSource = listItems();
			return (
				<SfMultiSelect
					id={name}
					name={name}
					placeholder={label}
					containerId={containerId}
					floatLabelType="Auto"
					dataSource={dataSource}
					inputValue={props.value}
					fields={{ text: 'label', value: 'value' }}
					didMount={dropdownOnInit(props, dataSource)}
					{...inputProps}
				/>
			);
		case 'dropdownlist':
			var dataSource = listItems();
			return (
				<SfDropDownList
					id={name}
					name={name}
					placeholder={label}
					containerId={containerId}
					floatLabelType="Auto"
					dataSource={dataSource}
					inputValue={props.value}
					fields={{ text: 'label', value: 'value' }}
					didMount={dropdownOnInit(props, dataSource)}
					{...inputProps}
				/>
			);
		case 'autocomplete':
			var dataSource = listItems();
			return (
				<SfAutoComplete
					id={name}
					name={name}
					placeholder={label}
					containerId={containerId}
					floatLabelType="Auto"
					inputValue={props.value}
					fields={{ text: 'label', value: 'value' }}
					didMount={dropdownOnInit(props, dataSource)}
					dataSource={dataSource.map((item) => item.label || item.value)}
					{...inputProps}
				/>
			);
		case 'radiobuttons':
			return (
				<div className="control-section">
					<div className="radio-control">
						<h4 className="row">{label}</h4>
						{listItems().map((item, index) => {
							return (
								<div className="row">
									<SfRadioButton
										id={'rd_' + item.label}
										label={item.label}
										name={name}
										inputValue={item.value}
										containerId={containerId}
										didMount={singularListItemOnInit(props, item)}
									/>
								</div>
							);
						})}
					</div>
				</div>
			);
		case 'checkboxlist':
			return (
				<div className="control-section" data-msg-containerid={containerId}>
					<div className="checkbox-control">
						<h4 className="row">{label}</h4>
						{listItems().map((item, index) => {
							return (
								<div className="row">
									<SfCheckBox
										id={'ch_' + item.label}
										label={item.label}
										name={name}
										inputValue={item.value}
										containerId={containerId}
										didMount={singularListItemOnInit(props, item)}
									/>
								</div>
							);
						})}
					</div>
				</div>
			);
		default:
			return 'TODO formListInput ' + listWidgetType;
	}
};
