import {
  IDataReference,
  IStateFormResources,
  formSchemas
} from "../../../sis/model/state-form";
import { listSchemas } from "../../../sis/model/state-list";
import { SfGrid } from "../../ej2-fidan-ui-components/Grid";
import { GridModel, Column, ColumnModel } from "@syncfusion/ej2-grids";
import { SfMultiSelect } from "../../ej2-fidan-ui-components/MultiSelect";
import { MultiSelectModel } from "@syncfusion/ej2-dropdowns";

export interface IStateFormDataRelation {
  input: IStateFormResources;
}

const oneToONERelationUI = (reference: IDataReference) => {
  console.log(reference);

  return <div>oneToONERelationUI</div>;
};
const oneToMANYRelationUI = (reference: IDataReference) => {
  const shema = listSchemas[reference.objectType]();
  console.log(reference, shema);
  // console.log(formSchemas[reference.objectType]);

  return (
    <SfMultiSelect mode="Box">
      <option value="Game1">American Football</option>
      <option value="Game2">Badminton</option>
      <option value="Game3">Basketball</option>
      <option value="Game4">Cricket</option>
      <option value="Game5">Football</option>
      <option value="Game6">Golf</option>
      <option value="Game7">Hockey</option>
      <option value="Game8">Rugby</option>
      <option value="Game9">Snooker</option>
      <option value="Game10">Tennis</option>
    </SfMultiSelect>
  );
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
