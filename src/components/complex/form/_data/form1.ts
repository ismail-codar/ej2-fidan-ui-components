/**
@fileCodeOptions: {
  "modelsPath": "../form1",
  "stateFormPath": "../../../../../sis/model/state-form",
  "stateListPath": "../../../../../sis/model/state-list"
}
*/

/**
 * @form_state
 * @list_state
 */
export interface ITestForm1 {
  text1: string;
  mask1: string;
  num1: 0;
  date1: string;
  list1: "a" | "b" | "c" | "d"
  list2: ("A" | "B" | "C" | "C" | "E")[]
  list3: ("1" | "2" | "3")[],
  list4: "X" | "Y" | "Z"
  list5: "K" | "L" | "M" | "N"
}