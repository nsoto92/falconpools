import React from 'react';
import styles from './Home.module.css';
import Page from '../components/Page/Page';
import { Header } from './sections/Header';
import { AboutUs } from './sections/AboutUs';
import { Services } from './sections/Services';

const HomePage = () => {
  return (
    <Page>
      <div className={styles.wrapper}>
        {/* <h1>Coming soon... Habla claro!</h1> */}
        <Header />
        <AboutUs />
        <Services />
        {/* <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1> */}
      </div>
    </Page>
  );
};

export default HomePage;