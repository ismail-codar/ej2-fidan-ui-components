import { ComponentBase, setupComponentView } from "../_base";
import { QueryBuilder, QueryBuilderModel } from "@syncfusion/ej2-querybuilder";

export const SfQueryBuilder = (props: QueryBuilderModel & ComponentBase<QueryBuilder>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, QueryBuilder);
  return _view;
};
