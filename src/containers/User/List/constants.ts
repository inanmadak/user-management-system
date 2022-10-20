import { GridColDef } from '@mui/x-data-grid';

import { UserInfo } from 'common/interface';

export const MOCK_USERS: UserInfo[] = [
  {
    id: '1',
    name: 'John Carmack',
    birthdate: new Date(2000, 2, 5),
    group: 'Lions',
  },
  {
    id: '2',
    name: 'John Snow',
    birthdate: new Date(1987, 2, 1),
    group: 'Lions',
  },
  {
    id: '3',
    name: 'Jasmin Green',
    birthdate: new Date(2092, 2, 9),
    group: 'Tigers',
  },
];

export const USER_TABLE_COLS: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    width: 200,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    width: 150,
  },
  {
    field: 'birthdate',
    headerName: 'Birthdate',
    flex: 1,
    width: 150,
  },
  {
    field: 'group',
    headerName: 'Group',
    flex: 1,
    width: 150,
  },
];
