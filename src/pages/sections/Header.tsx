import { Button } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';
import { Section } from '../../components/Section/Section';

import styles from './Header.module.css';
import { useIsMobile } from '../../utils/isMobile';

export const Header: FunctionComponent = (): ReactElement => {

  const isMobile = useIsMobile();

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <img className={styles.bgImg} src='/assets/construccion.jpg' alt={'headerImage'} />
        <div className={styles.headerContent}>
            <Button
              size={isMobile ? 'small' : 'medium'}
              variant="contained"
              href={'https://falconpoolsprhablaclaro.as.me/'}
            >
              {'Estimados Aquí'}
            </Button>
        </div>
      </div>
    </Section>
  );
};
