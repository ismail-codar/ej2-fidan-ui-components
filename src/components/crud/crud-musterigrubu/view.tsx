import {
  IBaseProps,
  ViewStylesType
} from "../../../../../app-packages/sis/components/react/base";
import { StateCrud } from "../../../../../app-packages/sis/components/react/state-crud/types";
import { appConstants } from "../../../../../app-packages/sis/constants";
import { formItemsICrudMusteriGrubuSchema } from "./_generated/ICrudMusteriGrubuSchema-formSchema";
import { listItemsICrudMusteriGrubuSchema } from "./_generated/ICrudMusteriGrubuSchema-listSchema";
import {
  ICrudMusteriHandlers,
  ICrudMusteriState,
  ICrudMusteriViewStyles
} from "./types";

export const crudMusteriStyles: ViewStylesType<
  ICrudMusteriViewStyles
> = theme => ({
  root: {
    width: "100%"
  }
});

export function CrudMusteriView(
  props: IBaseProps<
    ICrudMusteriState,
    ICrudMusteriHandlers,
    ICrudMusteriViewStyles
  >
) {
  const { state, handlers, classes } = props;
  return (
    <StateCrud
      restUrl={"musteri-grubu"}
      handlers={{} as any}
      form={{
        schema: formItemsICrudMusteriGrubuSchema,
        handlers: {} as any,
        editId: { value: null },
        isDirtyForm: { value: null }
      }}
      list={{
        schema: listItemsICrudMusteriGrubuSchema,
        handlers: {} as any,
        rows: []
      }}
    />
  );
}
