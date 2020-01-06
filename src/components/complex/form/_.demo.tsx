import { Form, FormComponent, FormModel } from './form';
import { value } from '@fidanjs/runtime';
import { Button } from '@syncfusion/ej2-buttons';
import { formItemsITestForm1 } from './_data/_generated/ITestForm1-formSchema';
import { ITestForm1 } from '../form/_data/form1';
import { MaskedTextBoxModel } from '@syncfusion/ej2-inputs';
import { SfButton } from '../../Button';

const useLabelValue = false;
const toLabelValue = (val) => {
	if (useLabelValue) {
		if (Array.isArray(val)) {
			val = val.map((item) => ({ value: val, label: val }));
		} else {
			val = { value: val, label: val };
		}
	}
	return val;
};

export const FormDemo = () => {
	const schema = formItemsITestForm1();
	const data1: FormModel<ITestForm1> = {
		schema: schema,
		values: {
			text1: value('1'),
			num1: value(1),
			date1: value(new Date()),
			mask1: value('534-321-2234'),
			list1: value(toLabelValue('b')),
			list2: value(toLabelValue([ 'A', 'E' ])),
			list3: value(toLabelValue([ '1', '3' ])),
			list4: value(toLabelValue('Y')),
			list5: value(toLabelValue('K'))
		}
	};

	schema.mask1.widgetType = 'maskedinput';
	(schema.mask1.inputProps as MaskedTextBoxModel).mask = '000-000-0000';
	schema.date1.widgetType = 'date-picker';
	schema.list2.listWidgetType = 'multiselect';
	schema.list3.listWidgetType = 'checkboxlist';
	schema.list4.listWidgetType = 'radiobuttons';
	schema.list5.listWidgetType = 'autocomplete';

	let form: FormComponent = null;
	let formDom: HTMLFormElement = null;
	if (useLabelValue) {
		schema.list1.useLabelValue = true;
		schema.list2.useLabelValue = true;
		schema.list3.useLabelValue = true;
		schema.list4.useLabelValue = true;
		schema.list5.useLabelValue = true;
	}

	schema.list1.listItems([
		{ label: 'a', value: 'a' },
		{ label: 'b', value: 'b' },
		{ label: 'c', value: 'c' },
		{ label: 'd', value: 'd' }
	]);
	setTimeout(() => {
		schema.list4.listItems().push({
			label: 'A',
			value: 1
		});
	}, 2000);

	let kaydetButonu: Button = null;

	return (
		<div className="content-wrapper">
			<div className="form-title">
				<span>Test Form1</span>
			</div>

			<Form
				data={data1}
				viewCreated={({ _component, _view }) => {
					form = _component;
					formDom = _view as any;
					kaydetButonu.disabled = true;
					form.onValidated = (isValid) => {
						kaydetButonu.disabled = !isValid;
					};
					form.onValidSubmit = () => {
						form.validator.reset();
					};
				}}
			>
				<div className="row">
					<div style="width: 320px;margin:0px auto;height: 100px;padding-top: 25px;">
						<SfButton type="reset">Temizle</SfButton>
						<SfButton
							isPrimary={true}
							viewCreated={({ _component }) => {
								kaydetButonu = _component;
							}}
						>
							Kaydet
						</SfButton>
					</div>
				</div>
			</Form>

			<SfButton
				didMount={({ _component: btn }) => {
					btn.element.addEventListener('click', () => {
						formDom.reset();
					});
				}}
			>
				Temizle(dışardan)
			</SfButton>

			<SfButton
				isPrimary={true}
				didMount={({ _component: btn }) => {
					btn.element.addEventListener('click', (e) => {
						data1.values.text1('2');
						data1.fromJSON({
							text1: '1a',
							mask1: 'm2',
							list1: toLabelValue('d'),
							list2: toLabelValue([ 'C', 'B' ]),
							list3: toLabelValue([ '1', '2' ]),
							list4: toLabelValue('Z'),
							list5: toLabelValue('M')
						});
					});
				}}
			>
				Demo Data
			</SfButton>

			<SfButton
				didMount={({ _component: btn }) => {
					btn.element.addEventListener('click', (e) => {
						console.log(JSON.stringify(data1.values, null, 1));
					});
				}}
			>
				Data Getir
			</SfButton>
		</div>
	);
};
