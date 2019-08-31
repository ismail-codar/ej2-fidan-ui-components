import { QueryBuilder, QueryBuilderModel } from "@syncfusion/ej2-querybuilder";

import { ComponentBase } from "../_base";

export const SfQueryBuilder = (props: QueryBuilderModel & ComponentBase<QueryBuilder>) => {
  const _view = <div>{props.children}</div>;

  let _component: QueryBuilder = new QueryBuilder(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
