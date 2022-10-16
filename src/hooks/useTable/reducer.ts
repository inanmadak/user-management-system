import { SortDirection } from '@mui/material';
import { ReducerAction } from 'common/interface';
import { orderBy } from 'lodash-es';
import { TableActionType } from './enum';
import { TableState } from './interface';

export const tableReducer = <T>(state: TableState<T>, action: ReducerAction) => {
  switch (action.type) {
    case TableActionType.SetItems:
      return { ...state, items: action.data };
    case TableActionType.MergeTableState:
      return { ...state, ...action.data };
    case TableActionType.SetPage:
      return { ...state, page: action.data };
    case TableActionType.SetPerPage:
      return { ...state, perPage: action.data };
    case TableActionType.SetSelectedItemId:
      return { ...state, selectedItemId: action.data };
    case TableActionType.OnSort:
      const [field, direction] = (Object.entries(action.data)?.[0] || []) as Array<string | SortDirection>;

      if (field && direction) {
        return { ...state, sort: action.data, items: orderBy([...state.items], [field], [direction as SortDirection]) };
      } else {
        return { ...state, sort: {}, items: orderBy([...state.items], ['id'], ['asc']) };
      }
    default:
      return state;
  }
};
