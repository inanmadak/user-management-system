import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

export const LabeledIcon: FC<{ label: string; icon: ReactElement }> = ({ label, icon }) => (
  <label className={styles.labeledIcon}>
    <span>{label}</span>
    {icon}
  </label>
);
