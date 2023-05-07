import React, { FunctionComponent, ReactElement } from 'react';

import styles from './Card.module.css';

export interface CardProps {
  children: ReactElement | ReactElement[];
}

export const Card: FunctionComponent<CardProps> = (props): ReactElement => {
  
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
};
