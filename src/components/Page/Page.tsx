import React, { FunctionComponent, ReactElement } from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './Page.module.css';

export interface PageProps {
  children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = (props): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Page;