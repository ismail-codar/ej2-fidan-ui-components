import { formItems } from '../state-form';

it("form-item", () => {
  const booleanFormItem1 = formItems.boolean({ validation: { min: 0 } });
  expect(booleanFormItem1.defaultValue).toBe(false);
  expect(booleanFormItem1.validation.required).toBe(true);
  expect(booleanFormItem1.validation.min).toBe(0);
});
