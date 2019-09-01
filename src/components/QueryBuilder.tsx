import { QueryBuilder, QueryBuilderModel } from "@syncfusion/ej2-querybuilder";

import { ComponentBase } from "../_base";

export const SfQueryBuilder = (props: QueryBuilderModel & ComponentBase<QueryBuilder>) => {
  const _view = <div>{props.children}</div>;

  let _component: QueryBuilder = new QueryBuilder(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
