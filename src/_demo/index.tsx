// require('@babel/polyfill');
import { enableRipple } from '@syncfusion/ej2-base';
import { FormDemo } from '../components/complex/form/_.demo';
enableRipple(true);

const view1: any = (
	<div>
		<FormDemo />
	</div>
);

const appMain = document.getElementById('app');
appMain.appendChild(view1);
