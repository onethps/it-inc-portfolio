import React, { FC } from 'react';
import style from './BlockTitle.module.scss';

interface BlockTitleType {
  title: string;
}

export const SectionTitle: FC<BlockTitleType> = ({ title }) => {
  return (
    <div className={style.blockTitleBox}>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
