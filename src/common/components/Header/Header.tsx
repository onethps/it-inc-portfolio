import React from 'react';
import Nav from "../Nav/Nav";
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};

export default Header;