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
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon /> 
        </IconButton>
        <IconButton>
          <TikTokIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;