import { Chip } from '@mui/material';
import { FC, memo } from 'react';

export const StateCell: FC<{ isActive: boolean }> = memo(({ isActive }) => (
  <Chip color={isActive ? 'success' : 'default'} label={isActive ? 'Active' : 'Inactive'} />
));
