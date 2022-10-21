import { FormikConfig } from 'formik';

import { UserInfo } from 'common/interface';
import { FormAdditionalActions } from 'components/Form/interface';

export interface BareUserFormProps
  extends Omit<FormikConfig<UserFormValues>, 'validationSchema'>,
    FormAdditionalActions {}

export interface CreateUserFormProps extends Omit<BareUserFormProps, 'onSubmit' | 'initialValues'> {}

export interface EditUserFormProps extends CreateUserFormProps {
  id: string;
}

export interface UserFormValues extends Omit<UserInfo, 'id' | 'group' | 'birthdate'> {
  id?: string;
  group: string;
  birthdate: string;
}
