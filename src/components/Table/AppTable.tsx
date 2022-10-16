import { Box } from '@mui/system';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { FC } from 'react';

import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS, TABLE_BOX_SX } from './constants';

export const AppTable: FC<Omit<DataGridProps, 'rowsPerPageOptions'>> = (props) => {
  return (
    <Box sx={TABLE_BOX_SX}>
      <DataGrid
        pageSize={props.pageSize || DEFAULT_PAGE_SIZE}
        rowsPerPageOptions={DEFAULT_PAGE_SIZE_OPTIONS}
        {...props}
      />
    </Box>
  );
};
