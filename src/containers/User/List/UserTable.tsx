import { FC } from 'react';

import { UserInfo } from 'common/interface';
import { AppTable } from 'components/Table';
import { USER_TABLE_COLS } from './constants';

export const UserTable: FC<{ rows: UserInfo[] }> = ({ rows }) => {
  return <AppTable columns={USER_TABLE_COLS} rows={rows} />;
};
