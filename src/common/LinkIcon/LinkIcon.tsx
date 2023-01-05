import React from 'react';
import { IconType } from 'react-icons/lib';
import style from './LinkIcon.module.scss';

type LinIconType = {
  href: string;
  Icon: IconType;
};

export const LinkIcon: React.FC<LinIconType> = ({ href, Icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className={style.root} />
      </a>
    </li>
  );
};
