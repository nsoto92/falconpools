import React, { FunctionComponent, ReactElement, useState } from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './Page.module.css';
import { useIsMobile } from '../../utils/isMobile';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from '../Logo/Logo';

export interface PageProps {
  children: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = (props): ReactElement => {
  const isMobile = useIsMobile();
  const [toggleDrawer, setToggleDrawer] = useState(false);
 return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <Navbar />
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
      <div className={styles.content}>
        {props.children}
      </div>
      
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
    </div>
    )
};

export default Page;