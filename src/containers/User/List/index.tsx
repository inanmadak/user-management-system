import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { PageTitle } from 'components/PageTitle/Component';
import { PATHS } from 'routing/paths';
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
      <Grid container item xs={10} justifyContent='flex-end'>
        <Link to={PATHS.ADD_USER}>
          <Button>Add new user</Button>
        </Link>
      </Grid>
      <Grid item xs={12} lg={10}>
        <UserTable rows={items} />
      </Grid>
    </Grid>
  );
};
