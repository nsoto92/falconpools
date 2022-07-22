import React, { FunctionComponent, ReactElement } from 'react';

import styles from './Icon.module.css';

export interface IconProps {
  children: React.ReactNode;
}

const Icon: FunctionComponent<IconProps> = (props): ReactElement => {
  return (
    <div className={styles.wrapper}>
       <svg className={styles.svg} viewBox="0 0 24 24">{props.children}</svg>
    </div>
  );
};

export default Icon;