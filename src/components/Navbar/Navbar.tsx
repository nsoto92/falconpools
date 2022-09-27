import React from 'react';
import { FacebookIcon } from '../Icon/Facebook';
import { TikTokIcon } from '../Icon/TikTok';
import { TwitterIcon } from '../Icon/Twitter';
import { YouTubeIcon } from '../Icon/YouTube';
import { Logo } from '../Logo/Logo';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.socials}>
        <FacebookIcon />
        <TwitterIcon />
        <TikTokIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
};

export default Navbar;