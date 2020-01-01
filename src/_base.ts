import onload from 'on-load';
import { FidanValue } from '@fidanjs/runtime';

export interface ComponentBase<T> {
	id?: any;
	children?: any;
	_component?: T;
	_view?: HTMLElement;
	viewCreated?(props: ComponentBase<T>);
	didMount?(props: ComponentBase<T>);
	unMount?(props: ComponentBase<T>);
	required?: boolean;
}

export interface InputWithMessageProps<T> extends ComponentBase<T> {
	id: string;
	name: string;
	placeholder?: string;
	containerId: string;
	inputValue?: FidanValue<any>;
}

export const setupComponentView = <T>(view, ComponentClass, props: ComponentBase<T>) => {
	props && props.viewCreated && props.viewCreated(props);
	onload(
		view,
		(el) => {
			let _component = new ComponentClass(props);
			props._component = _component;
			_component.appendTo(view);
			props && props.didMount && props.didMount(props);
		},
		(el) => {
			props && props.unMount && props.unMount(props);
		}
	);
};
