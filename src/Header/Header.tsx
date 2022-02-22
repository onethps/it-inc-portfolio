import React from 'react';
import Nav from "../Nav/Nav";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};

export default Header;