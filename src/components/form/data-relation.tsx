import {
  IDataReference,
  IStateFormResources
} from "../../../sis/model/state-form";

const oneToONERelationUI = (props: { input: IStateFormResources }) => {
  return <div>oneToONERelationUI</div>;
};
const oneToMANYRelationUI = (props: { input: IStateFormResources }) => {
  return <div>oneToMANYRelationUI</div>;
};

export const DataRelation = (props: { input: IStateFormResources }) => {
  const { input } = props;
  const { reference } = input;
  const { relationType } = reference;
  if (relationType === "one-to-one") {
    return oneToONERelationUI(props);
  } else if (relationType === "one-to-many") {
    return oneToMANYRelationUI(props);
  }
  // else if (relationType === "many-to-many") {
  // } else if (relationType === "many-to-one") {
  // }
  return <div>DataRelation</div>;
};
