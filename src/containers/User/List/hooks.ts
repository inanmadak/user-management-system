import { useEffect } from 'react';

import { useAppFactory } from 'context/AppFactoryContext';
import { useTable } from 'hooks/useTable';

export const useUserTable = () => {
  const { users } = useAppFactory();
  const table = useTable({ items: users });

  useEffect(() => {
    table.mergeTableState({ items: users });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return {
    table,
  };
};
