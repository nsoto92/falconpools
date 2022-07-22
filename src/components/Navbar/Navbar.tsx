import React from 'react';
import { FacebookIcon } from '../Icon/Facebook';
import { TikTokIcon } from '../Icon/TikTok';
import { TwitterIcon } from '../Icon/Twitter';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socials}>
        <FacebookIcon />
        <TwitterIcon />
        <TikTokIcon />
      </div>
    </div>
  );
};

export default Navbar;