import {
  IDataReference,
  IStateFormResources,
  formSchemas
} from "../../../sis/model/state-form";
import { listSchemas } from "../../../sis/model/state-list";

export interface IStateFormDataRelation {
  input: IStateFormResources;
}

const oneToONERelationUI = (reference: IDataReference) => {
  console.log(reference);

  return <div>oneToONERelationUI</div>;
};
const oneToMANYRelationUI = (reference: IDataReference) => {
  console.log(listSchemas[reference.objectType]);
  console.log(formSchemas[reference.objectType]);

  return <div>oneToMANYRelationUI</div>;
};

export const DataRelation = (props: IStateFormDataRelation) => {
  const { input } = props;
  const { reference } = input;
  const { relationType } = reference;
  if (relationType === "one-to-one") {
    return oneToONERelationUI(reference);
  } else if (relationType === "one-to-many") {
    return oneToMANYRelationUI(reference);
  }
  // else if (relationType === "many-to-many") {
  // } else if (relationType === "many-to-one") {
  // }
  return <div>DataRelation</div>;
};
