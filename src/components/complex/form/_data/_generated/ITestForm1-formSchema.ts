import {
  formItems,
  formSchemas,
  IStateFormResources
} from "../../../../../sis/model/state-form";
import { ITestForm1 } from "../form1";
import { value } from "@fidanjs/runtime";

export const formItemsITestForm1: () => {
  [key in keyof ITestForm1]: IStateFormResources<any>;
} = () => ({
  text1: formItems.string({
    name: "text1",
    label: ""
  }),
  mask1: formItems.string({
    name: "mask1",
    label: ""
  }),
  num1: formItems.number({
    name: "num1",
    label: ""
  }),
  date1: formItems.string({
    name: "date1",
    label: ""
  }),
  list1: formItems.string({
    listItems: value([
      {
        value: "a",
        label: "a"
      },
      {
        value: "b",
        label: "b"
      },
      {
        value: "c",
        label: "c"
      },
      {
        value: "d",
        label: "d"
      }
    ]),
    name: "list1",
    label: ""
  }),
  list2: formItems.string({
    listItems: value([
      {
        value: "A",
        label: "A"
      },
      {
        value: "B",
        label: "B"
      },
      {
        value: "C",
        label: "C"
      },
      {
        value: "E",
        label: "E"
      }
    ]),
    name: "list2",
    label: ""
  }),
  list3: formItems.string({
    listItems: value([
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      }
    ]),
    name: "list3",
    label: ""
  }),
  list4: formItems.string({
    listItems: value([
      {
        value: "X",
        label: "X"
      },
      {
        value: "Y",
        label: "Y"
      },
      {
        value: "Z",
        label: "Z"
      }
    ]),
    name: "list4",
    label: ""
  }),
  list5: formItems.string({
    listItems: value([
      {
        value: "K",
        label: "K"
      },
      {
        value: "L",
        label: "L"
      },
      {
        value: "M",
        label: "M"
      },
      {
        value: "N",
        label: "N"
      }
    ]),
    name: "list5",
    label: ""
  })
});

formSchemas["ITestForm1"] = formItemsITestForm1;
