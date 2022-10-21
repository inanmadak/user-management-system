import { FC, memo } from 'react';

export const DateCell: FC<{ date?: Date }> = memo(({ date }) => (
  <div>
    {date
      ? date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '-'}
  </div>
));
