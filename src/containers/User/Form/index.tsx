import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UserInfo } from 'common/interface';
import { PATHS } from 'routing/paths';
import { CreateUserForm } from './component/CreateUserForm';
import { EditUserForm } from './component/EditUserForm';

export const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);

  const onCompleted = useCallback(
    (user: UserInfo) => {
      navigate(PATHS.HOME);
    },
    [navigate],
  );

  return id ? (
    <EditUserForm id={id} onCancel={goBack} onSubmitCompleted={onCompleted} />
  ) : (
    <CreateUserForm onCancel={goBack} onSubmitCompleted={onCompleted} />
  );
};
