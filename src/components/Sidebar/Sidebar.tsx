import s from './Sidebar.module.scss';

import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoLogoPolymer } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { Link } from 'react-scroll';
import { BiCodeBlock } from 'react-icons/bi';

const menuItems = [
  {
    id: 1,
    Icon: AiOutlineHome,
    link: 'home',
  },
  {
    id: 2,
    Icon: BiCodeBlock,
    link: 'skills',
  },
  {
    id: 3,
    Icon: MdWork,
    link: 'portfolio',
  },
];

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
        <span className={s.copyright}>&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
