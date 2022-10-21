import { createContext, Dispatch, FC, PropsWithChildren, useContext, useState } from 'react';

import { GroupInfo, UserInfo } from 'common/interface';
import { MOCK_GROUPS, MOCK_USERS } from './mocks';

interface AppFactoryContextState {
  users: UserInfo[];
  groups: GroupInfo[];
  setUsers: Dispatch<UserInfo[]>;
  setGroups: Dispatch<GroupInfo[]>;
}

const AppFactoryContext = createContext<AppFactoryContextState>({} as AppFactoryContextState);

export const AppFactoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<UserInfo[]>(MOCK_USERS);
  const [groups, setGroups] = useState<GroupInfo[]>(MOCK_GROUPS);

  return (
    <AppFactoryContext.Provider
      value={{
        users,
        groups,
        setUsers,
        setGroups,
      }}
    >
      {children}
    </AppFactoryContext.Provider>
  );
};

export const useAppFactory = () => useContext(AppFactoryContext);
