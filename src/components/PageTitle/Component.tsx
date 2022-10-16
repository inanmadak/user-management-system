import { Typography } from '@mui/material';
import { FC } from 'react';

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Typography variant='h1' fontSize={36}>
      {title}
    </Typography>
  );
};
