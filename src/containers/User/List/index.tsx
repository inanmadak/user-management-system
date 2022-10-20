import { Grid } from '@mui/material';

import { PageTitle } from 'components/PageTitle/Component';
import { MOCK_USERS } from './constants';
import { UserTable } from './UserTable';

export const UserList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageTitle title='User List' />
      </Grid>
      <Grid item xs={8}>
        <UserTable rows={MOCK_USERS} />
      </Grid>
    </Grid>
  );
};
