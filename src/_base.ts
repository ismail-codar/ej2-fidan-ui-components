import onload from 'on-load';
import { FidanValue } from '@fidanjs/runtime';

export interface ComponentBase<T> {
	id?: any;
	children?: any;
	_component?: T;
	_view?: HTMLElement;
	didMount?(props: ComponentBase<T>);
	required?: boolean;
}

export interface InputWithMessageProps<T> extends ComponentBase<T> {
	id: string;
	name: string;
	placeholder?: string;
	containerId: string;
	inputValue?: FidanValue<any>;
}

export const setupComponentView = (view, component) => {
	onload(
		view,
		(el) => {
			//
		},
		(el) => {
			//
		}
	);
};
