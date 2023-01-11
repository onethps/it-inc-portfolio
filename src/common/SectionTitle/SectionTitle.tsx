import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { TbGridDots } from 'react-icons/tb';

import style from './BlockTitle.module.scss';

interface BlockTitleType {
  title: string;
}

export const SectionTitle: FC<BlockTitleType> = ({ title }) => {
  return (
    <Fade direction={'up'}>
      <h1 className={style.title}>
        {' '}
        <TbGridDots color={'white'} />
        {title}
      </h1>
    </Fade>
  );
};

export default SectionTitle;
