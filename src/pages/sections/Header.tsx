import React, { FunctionComponent, ReactElement } from 'react';
import { Logo } from '../../components/Logo/Logo';
import { Section } from '../../components/Section/Section';

import styles from './Header.module.css';

export const Header: FunctionComponent = (): ReactElement => {

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <div className={styles.bg} />
        <div className={styles.logo}>
        <h1 className={styles.title}>{'Falcon Pools'}</h1>
        <div className={styles.divider}/>
        <p className={styles.content}>
          {'Somos una compañía localizada '}
        </p>
          <Logo />
        </div>
      </div>
    </Section>
  );
};