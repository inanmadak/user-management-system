import { SortDirection } from '@mui/material';

export interface TableState<T> {
  items: T[];
  selectedItemId?: number;
  page: number;
  perPage: number;
  sort: { [x in keyof T]?: SortDirection };
}

export interface TableActions<T> {
  setItems: (items: T[]) => void;
  setSelectedItemId: (itemId?: number) => void;
  setPage: (newPage: number) => void;
  setPerPage: (newPerPage: number) => void;
  onSort: (newSortObcjet: TableState<T>['sort']) => void;
  mergeTableState: (updatedFields: Partial<TableState<T>>) => void;
}
