import { Sidebar } from '@syncfusion/ej2-navigations';
import { ComponentBase } from '../../_base';

export interface SideBarProps extends ComponentBase<Sidebar> {
	title: string;
	sidebarCss?: string;
	subTitleCss?: string;
	closeIconCss?: string;
	titleHeaderCss?: string;
}
