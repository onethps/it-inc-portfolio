import React, { FC } from 'react';
import s from './PortfolioItem.module.scss';
import { PortfolioData } from '../portfolioData';
import { AiOutlineZoomIn } from 'react-icons/ai';

type PortfolioItem = {
  portfolioItem: PortfolioData;
  setToggleGallery: (bool: boolean) => void;
};

export const PortfolioItem: FC<PortfolioItem> = ({ portfolioItem, setToggleGallery }) => {
  return (
    <div className={s.portfolioItem}>
      <img src={portfolioItem.screen} alt={'portfolio_img'} className={s.thumb} />
      <div className={s.details}>
        <span className={s.label}>Web Aplication</span>
        <h1 className={s.title}>{portfolioItem.title}</h1>
        <div className={s.moreButton}>
          <AiOutlineZoomIn onClick={() => setToggleGallery(true)} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
