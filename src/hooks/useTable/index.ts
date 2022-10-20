import { useCallback, useMemo, useReducer } from 'react';

import { TableActionType } from './enum';
import { TableActions, TableState } from './interface';
import { tableReducer } from './reducer';

const defaultTableState: TableState<any> = {
  items: [],
  perPage: 10,
  page: 0,
  sort: {},
  selectedItemId: undefined,
};

export const useTable = <T>(initialState?: Partial<TableState<T>>): { state: TableState<T> } & TableActions<T> => {
  const [state, dispatch] = useReducer(tableReducer, { ...defaultTableState, ...initialState });

  const setItems = useCallback((items: T[]) => dispatch({ type: TableActionType.SetItems, data: items }), []);

  const setPage = useCallback((page: number) => dispatch({ type: TableActionType.SetPage, data: page }), []);

  const setPerPage = useCallback(
    (perPage: number) => dispatch({ type: TableActionType.SetPerPage, data: perPage }),
    [],
  );

  const setSelectedItemId = useCallback(
    (itemId?: number) => dispatch({ type: TableActionType.SetSelectedItemId, data: itemId }),
    [],
  );

  const onSort = useCallback(
    (newSort: TableState<T>['sort']) => dispatch({ type: TableActionType.OnSort, data: newSort }),
    [],
  );

  const mergeTableState = useCallback(
    (partialState: Partial<TableState<T>>) => dispatch({ type: TableActionType.MergeTableState, data: partialState }),
    [],
  );

  return useMemo(
    () => ({
      state,
      setItems,
      setPage,
      setPerPage,
      onSort,
      setSelectedItemId,
      mergeTableState,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state], // other dependencies can be added here, but will disable the rule for cleanness since those deps are memoized and will not change.
  );
};
