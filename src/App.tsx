import { ThemeProvider } from '@mui/material';

import { AppTheme } from 'common/theme';
import { AppFactoryProvider } from 'context/AppFactoryContext';
import { AppRouter } from 'routing/AppRouter';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ThemeProvider theme={AppTheme}>
        <AppFactoryProvider>
          <AppRouter />
        </AppFactoryProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
