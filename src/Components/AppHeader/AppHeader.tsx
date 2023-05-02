import React from 'react';
import { Header } from '@consta/header/Header';
import logoDP from '../../img/logoDP.svg';
import classes from './AppHeader.module.css';
import { Button } from '@consta/uikit/Button';
import { IconHamburger } from '@consta/uikit/IconHamburger';

const AppHeader: React.FC = () => {
  const Logo = () => {
    return (
      <div className={classes.container}>
        <div className={classes.btnContainer}>
          <Button view={'clear'} iconRight={IconHamburger} onlyIcon className={classes.logoBtn} />
        </div>
        <img src={logoDP} className={classes.logo} alt="logo" />
      </div>
    );
  };

  return <Header className={classes.header} userLogined={false} logo={<Logo />} fixed />;
};

export default AppHeader;
