import { FC, memo, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const LongTextCell: FC<PropsWithChildren & { title?: string }> = memo(({ title, children }) => (
  <div title={title} className={styles.longTextCell}>
    {children}
  </div>
));
