import { FieldValidator, FieldSubscription, FieldState } from "final-form";

// https://github.com/final-form/react-final-form-html5-validation/blob/master/src/Html5ValidationField.js

type Messages = {
  badInput?: string;
  patternMismatch?: string;
  rangeOverflow?: string;
  rangeUnderflow?: string;
  stepMismatch?: string;
  tooLong?: string;
  tooShort?: string;
  typeMismatch?: string;
  valueMissing?: string;
};

type WithValidity = {
  validity: ValidityState;
  setCustomValidity: (error?: string) => void;
};

export type Html5ValidationFieldProps = FieldState<any> & Messages;

const errorKeys: string[] = [
  "badInput",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing"
];

const validate = (
  input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  validate,
  errorKeys: any,
  value?: any,
  allValues?: Object
) => {
  if (input) {
    const validity: ValidityState = input && input.validity;
    if (validate) {
      const error = validate(value, allValues);
      if (input.setCustomValidity && typeof error === "string") {
        input.setCustomValidity(error);
      }
      if (error) {
        return error;
      }
    }
    input.setCustomValidity("");
    if (validity && !validity.valid) {
      if (validity.customError) {
        return validity.customError;
      }
      const errorKey: string = errorKeys.find(key => validity[key]);
      const error = errorKey && errorKeys[errorKey];
      input.setCustomValidity(error);
      return error;
    }
  } else if (validate) {
    return validate(value, allValues);
  }
};

export const Html5ValidationField = (props: Html5ValidationFieldProps) => {
  const defaultProps = {
    badInput: "Incorrect input",
    patternMismatch: "Does not match expected pattern",
    rangeOverflow: "Value too high",
    rangeUnderflow: "Value too low",
    stepMismatch: "Invalid step value",
    tooLong: "Too long",
    tooShort: "Too short",
    typeMismatch: "Invalid value",
    valueMissing: "Required"
  };

  const root: HTMLElement = null;

  // let input: WithValidity = null;
  // if (/input|textarea|select/.test(root.nodeName.toLowerCase())) {
  // } else if (root.querySelector) {
  // 	const { name } = this.props;
  // 	input = root.querySelector(`input[name="${name}"],textarea[name="${name}"],select[name="${name}"]`) as any;
  // }
  // const foundInput = input && typeof input.setCustomValidity === 'function';
  // if (foundInput) {
  // 	this.input = input;
  // }
};
