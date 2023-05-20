import React from 'react';
import styles from './Home.module.css';
import Page from '../components/Page/Page';
import { Header } from './sections/Header';
import { AboutUs } from './sections/AboutUs';
import { Services } from './sections/Services';

const HomePage = () => {
  return (
    <Page>
        {/* <h1>Coming soon... Habla claro!</h1> */}
      <div className={styles.wrapper}>
        <Header />
        <AboutUs />
        <Services />
      </div>
    </Page>
  );
};

export default HomePage;