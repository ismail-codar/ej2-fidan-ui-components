import { Sidebar, SidebarModel } from '@syncfusion/ej2-navigations';
import { SideBarProps } from './props/SideBarProps';
import { setupComponentView } from '../_base';

export const SfSidebar = (props: SidebarModel & SideBarProps) => {
	const _view = (
		<aside className={props.sidebarCss || 'sidebar-container'}>
			<div className={props.titleHeaderCss || 'sidebar-title-header'}>
				<div style="display:inline-block"> {props.title} </div>
				<span
					id="close"
					className={props.closeIconCss || 'sidebar-close fas fa-times e-icons'}
					onClick={() => _component.hide()}
				/>
			</div>
			<div className={props.subTitleCss || 'sidebar-content'}>{props.children}</div>
		</aside>
	);
	const _component = setupComponentView(_view, props, Sidebar);
	return _view;
};
