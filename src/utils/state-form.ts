import { FidanArray } from '@fidanjs/runtime';
import { ComponentBase } from '../_base';
import { FormSchemaType } from '../components/complex/form/form';
import { ColumnModel } from '@syncfusion/ej2-grids';

export interface IFormValidation {
	required?: boolean;
	min?: number;
	max?: number;
}

export interface IDataReference {
	labelKey?: string;
	objectType: string;
	relationType: 'one-to-many' | 'many-to-one' | 'one-to-one' | 'many-to-many';
	widget?: 'grid' | 'crud';
}

export interface IStateFormResources<T> {
	inputProps?: T;
	hidden?: boolean;
	type: 'boolean' | 'string' | 'password' | 'number' | 'integer' | 'date' | 'time' | 'datetime';
	widgetType?:
		| 'toggle'
		| 'text'
		| 'slider'
		| 'maskedinput'
		| 'date-picker'
		| 'datetime-picker'
		| 'time-picker'
		| 'daterange-picker';
	listWidgetType?: 'radiobuttons' | 'checkboxlist' | 'autocomplete' | 'dropdownlist' | 'multiselect';
	useLabelValue?: boolean;
	listItems?: FidanArray<
		{
			value: any;
			label: string;
			component?: ComponentBase<any>;
		}[]
	>;
	format?: 'date' | 'time' | 'date-time' | 'image-blob' | 'geo-data' | 'color-palette';
	defaultValue: any;
	name: string;
	label: string;
	validation: IFormValidation;
	layout: {
		fullWidth: boolean;
		fixWidth?: number;
	};
	reference?: IDataReference;
	readonly component?: any;
	readonly view?: any;
}

const formItemData = (
	defaults: Partial<IStateFormResources<any>>,
	options?: Partial<IStateFormResources<any>>
): IStateFormResources<any> => {
	if (!options.label) options.label = options.name;
	const data: IStateFormResources<any> = {
		inputProps: {},
		defaultValue: defaults.defaultValue,
		type: defaults.type,
		format: defaults.format,
		validation: {
			required: true
		},
		layout: {
			fullWidth: true
		},
		name: options.name || '',
		label: options.label || ''
	};
	for (var key in options) {
		if (typeof options[key] != 'object') data[key] = options[key];
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
	return data;
};

export const formSchemaToDataGridColumns = <T>(schema: FormSchemaType<T>) => {
	const columns: ColumnModel[] = [];
	for (var key in schema) {
		const input = schema[key];
		if (input.hidden) {
			continue;
		}
		const column: ColumnModel = {
			field: key,
			headerText: key
		};
		if (input.useLabelValue) {
			if (input.listItems)
				column.template =
					'${for(item of ' + key + ')}${item.label}${if(itemIndex<' + key + '.length-1)},${/if} ${/for}';
			else column.template = '${' + key + '.label}';
		}
		columns.push(column);
	}
	return columns;
};

export const formItems = {
	boolean: (options?: Partial<IStateFormResources<any>>): IStateFormResources<any> => {
		return formItemData(
			{
				defaultValue: false,
				type: 'boolean'
			},
			options
		);
	},
	string: <T>(options?: Partial<IStateFormResources<T>>): IStateFormResources<T> => {
		return formItemData(
			{
				defaultValue: '',
				type: 'string'
			},
			options
		);
	},
	number: (options?: Partial<IStateFormResources<any>>): IStateFormResources<any> => {
		return formItemData(
			{
				defaultValue: 0,
				type: 'number'
			},
			options
		);
	},
	array: (options?: Partial<IStateFormResources<any>>): IStateFormResources<any> => {
		return formItemData(
			{
				defaultValue: 0,
				type: 'number'
			},
			options
		);
	},
	dateTime: (options?: Partial<IStateFormResources<any>>): IStateFormResources<any> => {
		return formItemData(
			{
				defaultValue: new Date(),
				type: 'string',
				format: 'date-time'
			},
			options
		);
	},
	ref: (options?: Partial<IStateFormResources<any>>): IStateFormResources<any> => {
		return formItemData(
			{
				defaultValue: null,
				type: 'string'
			},
			options
		);
	}
};

export const formSchemas: {
	[key: string]: () => { [key: string]: IStateFormResources<any> };
} = {};
