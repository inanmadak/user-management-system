import { Button } from '@mui/material';
import { FC, useCallback } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { PATHS } from 'routing/paths';
import styles from './styles.module.scss';

interface ActionsCellProps {
  id: string;
  onDeleteClick?: (id: string) => void;
}

export const ActionsCell: FC<ActionsCellProps> = ({ id, onDeleteClick }) => {
  const _onDeleteClick = useCallback(() => onDeleteClick && onDeleteClick(id), [onDeleteClick, id]);

  return (
    <div className={styles.actionsWrapper}>
      <Link to={generatePath(PATHS.EDIT_USER, { id: String(id) })}>
        <Button variant='contained'>Edit</Button>
      </Link>
      <Button variant='contained' color='error' onClick={_onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};
