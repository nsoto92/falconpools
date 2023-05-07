import React, { FunctionComponent, ReactElement } from 'react';

import styles from './Section.module.css';

export interface SectionProps {
  children: ReactElement;
  color: 'white' | 'gray' | 'blue';
}

export const Section: FunctionComponent<SectionProps> = (props): ReactElement => {

  const getWrapperStyles = () => {
    const s = [styles.wrapper];
    s.push(styles[props.color]);
    return s.join(' ');
  };
  
  return (
    <div className={getWrapperStyles()}>
      {props.children}
    </div>
  );
};
