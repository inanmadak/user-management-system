import { useTable } from 'hooks/useTable';

export const useUserTable = () => {
  const table = useTable();

  return {
    table,
  };
};
