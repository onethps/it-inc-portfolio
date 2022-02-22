import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav className={style.navStyle}>
                <ul>
                    <li><a href={'#home'}>Home</a></li>
                    <li><a href={'#about'}>About</a></li>
                    <li><a href={'#services'}>Services</a></li>
                    <li><a href={'#portfolio'}>Portfolio</a></li>

                </ul>
            </nav>
        </div>
    );
};

export default Nav;