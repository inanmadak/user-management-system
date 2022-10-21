import { FormikHelpers } from 'formik';
import { FC, useCallback } from 'react';

import { useAppFactory } from 'context/AppFactoryContext';
import { mapUserInfoToForm, mapUserValuesToUserInfo } from '../helpers';
import { EditUserFormProps, UserFormValues } from '../interface';
import { BareUserForm } from './BareUserForm';

export const EditUserForm: FC<EditUserFormProps> = ({ id, onSubmitCompleted, onCancel }) => {
  const { users, groups, setUsers } = useAppFactory();
  const user = users.find((user) => user?.id === id);

  const _onSubmit = useCallback(
    (values: UserFormValues, formikHelpers: FormikHelpers<UserFormValues>) => {
      const userIndex = users.findIndex(({ id }) => id === values.id);
      const updatedUsers = [...users];
      let user = mapUserValuesToUserInfo(values, groups);

      if (userIndex > -1) {
        updatedUsers[userIndex] = user;
        setUsers(updatedUsers);
      }
      onSubmitCompleted && onSubmitCompleted(user);
    },
    [groups, onSubmitCompleted, setUsers, users],
  );

  return (
    <BareUserForm onCancel={onCancel} onSubmit={_onSubmit} initialValues={mapUserInfoToForm(user as any) as any} />
  );
};
