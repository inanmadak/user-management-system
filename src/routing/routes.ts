import { UserForm } from 'containers/User/Form';
import { UserList } from 'containers/User/List';
import { PATHS } from './paths';

export const ROUTES = [
  {
    path: PATHS.HOME,
    exact: true,
    component: UserList,
  },
  {
    path: PATHS.ADD_USER,
    exact: true,
    component: UserForm,
  },
  {
    path: PATHS.EDIT_USER,
    exact: true,
    component: UserForm,
  },
];
