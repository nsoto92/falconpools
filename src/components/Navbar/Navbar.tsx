import { IconButton } from '@mui/material';
import React from 'react';
import { FacebookIcon } from '../Icon/Facebook';
import { InstagramIcon } from '../Icon/Instagram';
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
        <IconButton target="_blank" href="https://www.facebook.com/falconpoolspr">
          <FacebookIcon />
        </IconButton>
        <IconButton target="_blank" href="https://twitter.com/falconpoolspr?lang=en">
          <TwitterIcon /> 
        </IconButton>
        <IconButton target="_blank" href="https://www.tiktok.com/@falconpoolspr/">
          <TikTokIcon />
        </IconButton>
        <IconButton target="_blank" href="https://www.youtube.com/@falconpoolspr">
          <YouTubeIcon />
        </IconButton>
        <IconButton target="_blank" href="https://www.instagram.com/falconpoolspr/">
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;