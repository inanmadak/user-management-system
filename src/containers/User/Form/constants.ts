import { SxProps, Theme } from '@mui/material';

import { UserFormValues } from './interface';

export const BARE_USER_FORM_BOX_SX: SxProps<Theme> = { width: 500, height: 800 };

export const userFormInitialValues: UserFormValues = {
  birthdate: '',
  group: '',
  name: '',
};
