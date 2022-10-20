import { Grid } from '@mui/material';

import { PageTitle } from 'components/PageTitle/Component';
import { useUserTable } from './hooks';
import { UserTable } from './UserTable';

export const UserList = () => {
  const {
    table: {
      state: { items },
    },
  } = useUserTable();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageTitle title='User List' />
      </Grid>
      <Grid item xs={8}>
        <UserTable rows={items} />
      </Grid>
    </Grid>
  );
};
