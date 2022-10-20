import { useTable } from 'hooks/useTable';
import { MOCK_USERS } from './mocks';

export const useUserTable = () => {
  const table = useTable({ items: MOCK_USERS });

  return {
    table,
  };
};
