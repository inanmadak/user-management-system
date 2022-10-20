import { GridColDef } from '@mui/x-data-grid';

import { DateCell } from 'components/Table';
import { UserInfo } from 'common/interface';

export const USER_TABLE_COLS: GridColDef<UserInfo>[] = [
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
    renderCell: ({ value }) => <DateCell date={value} />,
  },
  {
    field: 'group',
    headerName: 'Group',
    flex: 1,
    width: 150,
  },
];
