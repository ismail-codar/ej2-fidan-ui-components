import { ComponentBase } from "../_base";
import { QueryBuilder, QueryBuilderModel } from "@syncfusion/ej2-querybuilder";

export const SfQueryBuilder = (props: QueryBuilderModel & ComponentBase<QueryBuilder>) => {
  const _view = <div>{props.children}</div>;

  let _component: QueryBuilder = new QueryBuilder(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
