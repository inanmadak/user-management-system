import { FormikHelpers } from 'formik';
import { FC, useCallback } from 'react';

import { useAppFactory } from 'context/AppFactoryContext';
import { userFormInitialValues } from '../constants';
import { CreateUserFormProps, UserFormValues } from '../interface';
import { BareUserForm } from './BareUserForm';
import { mapUserValuesToUserInfo } from '../helpers';

export const CreateUserForm: FC<CreateUserFormProps> = ({ onSubmitCompleted, onCancel }) => {
  const { users, groups, setUsers } = useAppFactory();

  const _onSubmit = useCallback(
    (values: UserFormValues, formikHelpers: FormikHelpers<UserFormValues>) => {
      const user = mapUserValuesToUserInfo(values, groups);

      setUsers([mapUserValuesToUserInfo(values, groups), ...users]);
      onSubmitCompleted && onSubmitCompleted(user);
    },
    [groups, onSubmitCompleted, setUsers, users],
  );

  return <BareUserForm onCancel={onCancel} onSubmit={_onSubmit} initialValues={userFormInitialValues} />;
};
