import { IStateListResources } from "../../../sis/model/state-list";

export interface IStateListViewStyles {
  root;
}

export interface IStateListHandlers {
  dataRows: any;
  changeSorting;
  changeCurrentPage;
  changePageSize;
  changeColumnOrder;
  onSelectionChange;
  resetSelections;
  serverJson;
  removeRow;
}

export interface IStateListState {
  handlers?: { [key in keyof IStateListHandlers]: any };
  schema?: { [key: string]: IStateListResources };
  rows?: any[];
  sorting?: string[];
  currentPage?: number;
  pageSize?: number;
  pageSizes?: number[];
  columnOrder?: string[];
  tableColumnExtensions?: { columnName: string; align: "left" | "right" }[];
  defaultGrouping?: { columnName: string }[];
  defaultExpandedGroups?: string[];
  selectedRowIds?: number[];
  onSelectionChange?: (selectedRow) => void;
  cellClickCallback?: (data, e?) => void;
}
