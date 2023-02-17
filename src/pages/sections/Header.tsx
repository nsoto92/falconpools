import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { Section } from '../../components/Section/Section';

import styles from './Header.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F47C4B',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Noto Serif',
  },
});

export const Header: FunctionComponent = (): ReactElement => {

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <div className={styles.bg} />
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{'Falcón Pools'}</h1>
          <div className={styles.divider}/>
          <div className={styles.content}>
            <p>{'¡Habla Claro!'}</p>
          </div>
          <ThemeProvider theme={theme}>
            <Button variant="contained">{'Estimados Aquí'}</Button>
          </ThemeProvider>
        </div>
      </div>
    </Section>
  );
};