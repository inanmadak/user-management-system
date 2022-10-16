import { ThemeProvider } from '@mui/material';

import { AppTheme } from 'common/theme';
import { AppRouter } from 'routing/AppRouter';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ThemeProvider theme={AppTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
