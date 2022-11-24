import React, { FunctionComponent, ReactElement } from 'react';
import FPLogo from '../../assets/fpLogo.svg';

import styles from './Logo.module.css';

export interface LogoProps {
  type?: "header" | "footer" | "navbar";
}


export const Logo: FunctionComponent<LogoProps> = (props): ReactElement => {

  const getLogoStyles = () => {
    const s = [styles.wrapper];
    if (props.type) {
      s.push(styles[props.type]);
    }
    
    return s.join(' ');
  };
  return (
    <img className={getLogoStyles()} src={FPLogo} alt="logo" />
  );
};