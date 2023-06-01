import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { FacebookIcon } from '../Icon/Facebook';
import { InstagramIcon } from '../Icon/Instagram';
import { TikTokIcon } from '../Icon/TikTok';
import { TwitterIcon } from '../Icon/Twitter';
import { YouTubeIcon } from '../Icon/YouTube';
import { Logo } from '../Logo/Logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Navbar.module.css';
import { useIsMobile } from '../../utils/isMobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  
  return (
  <Fragment>
    {!isMobile ? (
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
    ) : (
      <AppBar color="inherit">
         <Toolbar variant="dense">
          <IconButton
            onClick={() => setToggleDrawer(true)}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Logo type="navbar"/>
        </Toolbar>
      </AppBar>
    )}

    {/* Drawer Logic */}
    <Drawer
      anchor={"top"}
      open={toggleDrawer}
      onClose={() => setToggleDrawer(false)}
    >
      <div className={styles.drawerBtn}>
        <IconButton
          onClick={() => setToggleDrawer(false)}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.drawerContent}>
        <Button variant="text" color="inherit" target="_blank" href="https://www.facebook.com/falconpoolspr">
          <Typography variant="h6">Facebook</Typography>
        </Button>
        <Button variant="text" color="inherit" target="_blank" href="https://www.instagram.com/falconpoolspr/">
          <Typography variant="h6">Instagram</Typography>
        </Button>
        <Button variant="text" color="inherit" target="_blank" href="https://www.tiktok.com/@falconpoolspr/">
          <Typography variant="h6">Tik Tok</Typography>
        </Button>
        <Button variant="text" color="inherit" target="_blank" href="https://www.youtube.com/@falconpoolspr">
          <Typography variant="h6">Youtube</Typography>
        </Button>
        <Button variant="text" color="inherit" target="_blank" href="https://twitter.com/falconpoolspr?lang=en">
          <Typography variant="h6">Twitter</Typography>
        </Button>
      </div>
    </Drawer>
  </Fragment>
  )
    
};

export default Navbar;