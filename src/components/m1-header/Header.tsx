import React from 'react';
import Nav from "../m2-nav/Nav";
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};

export default Header;