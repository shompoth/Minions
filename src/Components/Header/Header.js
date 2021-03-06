import React from 'react';
import logo from '../../assets/img/logo.png';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.Header}>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;