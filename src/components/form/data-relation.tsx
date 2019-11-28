import {
  IDataReference,
  IStateFormResources
} from "../../../sis/model/state-form";

export const DataRelation = (props: { input: IStateFormResources }) => {
  const { input } = props;
  const { reference } = input;
  const { relationType } = reference;
  if (relationType === "one-to-one") {
  } else if (relationType === "many-to-many") {
  } else if (relationType === "many-to-one") {
  } else if (relationType === "one-to-many") {
  }
  return <div>DataRelation</div>;
};
