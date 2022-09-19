import React, { FC } from 'react';
import s from './PortfolioItem.module.scss';
import { PortfolioData } from '../portfolioData';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { BiCodeAlt, BiCodeBlock } from 'react-icons/bi';

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
        <ul className={s.moreButtonsList}>
          <li className={s.buttonItem}>
            <label className={s.iconLabel}>Screenshots</label>
            <AiOutlineZoomIn
              className={s.showGalleryButton}
              onClick={() => setToggleGallery(true)}
            />
          </li>
          <li className={s.buttonItem}>
            <label className={s.iconLabel}>Demo</label>
            <BiCodeBlock
              className={s.showGalleryButton}
              onClick={() => setToggleGallery(true)}
            />
          </li>
          <li className={s.buttonItem}>
            <label className={s.iconLabel}>Code</label>
            <BiCodeAlt
              className={s.showGalleryButton}
              onClick={() => setToggleGallery(true)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioItem;
