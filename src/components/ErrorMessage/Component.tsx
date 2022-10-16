import { Alert } from '@mui/material';
import { FC } from 'react';

export const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return <Alert severity='error'>{message}</Alert>;
};
