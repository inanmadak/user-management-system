import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useCallback } from 'react';

import { DateCell, ActionsCell, LongTextCell } from 'components/Table';
import { UserInfo } from 'common/interface';
import { useAppFactory } from 'context/AppFactoryContext';

const UserActionsCell = ({ id }: GridRenderCellParams) => {
  const { users, setUsers } = useAppFactory();

  const onDeleteClick = useCallback(() => {
    const index = users.findIndex(({ id: _id }) => id === _id);

    if (index > -1) {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);

      setUsers(updatedUsers);
    }
  }, [id, setUsers, users]);

  return <ActionsCell id={id as string} onDeleteClick={onDeleteClick} />;
};

export const USER_TABLE_COLS: GridColDef<UserInfo>[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
    disableColumnMenu: true,
    minWidth: 120,
    renderCell: ({ value }) => <LongTextCell title={value}>{value}</LongTextCell>,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    disableColumnMenu: true,
    minWidth: 120,
    renderCell: ({ value }) => <LongTextCell title={value}>{value}</LongTextCell>,
  },
  {
    field: 'birthdate',
    headerName: 'Birthdate',
    flex: 1,
    disableColumnMenu: true,
    minWidth: 120,
    renderCell: ({ value }) => <DateCell date={value} />,
  },
  {
    field: 'group',
    headerName: 'Group',
    flex: 1,
    disableColumnMenu: true,
    minWidth: 120,
    renderCell: ({ value }) => value?.name,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    minWidth: 200,
    renderCell: UserActionsCell,
  },
];
