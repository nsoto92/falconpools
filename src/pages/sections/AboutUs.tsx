import React, { FunctionComponent, ReactElement } from 'react';
import { Section } from '../../components/Section/Section';

import styles from './AboutUs.module.css';
import { Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import { aboutUs } from '../../locales/es';

export const AboutUs: FunctionComponent = (): ReactElement => {
  const isMobile = useIsMobile();

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <Typography
          variant={isMobile ?'h4' : 'h3'}
          align={'center'}
        >
          {'Nuestra Historia'}
        </Typography>
        <Typography
          variant={'body1'}
          align={!isMobile ? 'center' : 'left'}
          sx={{ whiteSpace: 'pre-line'}}
        >
          {aboutUs}
        </Typography>
      </div>
    </Section>
  );
};