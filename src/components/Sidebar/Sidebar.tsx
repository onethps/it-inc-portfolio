import React from 'react';
import { IoLogoPolymer } from 'react-icons/io';
import { Link } from 'react-scroll';

import { menuItems } from './menu.data';
import s from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={s.aside}>
      <a href="#a" className={s.navLogo}>
        <IoLogoPolymer fontSize={50} />
      </a>

      <nav className={s.nav}>
        <div className={s.navMenu}>
          <ul className={s.navList}>
            {menuItems.map(el => (
              <li className={s.navItem} key={el.id}>
                <Link spy className={s.navLink} to={el.link} activeClass={s.active}>
                  {<el.Icon />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={s.navFooter}>
        <span className={s.copyright}>&copy; 2023 - 2024.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
