import React, { FunctionComponent, ReactElement } from 'react';
import FPLogo from '../../assets/fpLogo.svg';

import styles from './Logo.module.css';



export const Logo: FunctionComponent = (): ReactElement => {
  return (
    <img className={styles.wrapper} src={FPLogo} alt="logo" />
  );
};