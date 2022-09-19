import React, { FC, useState } from 'react';
import s from './PortfolioItem.module.scss';
import { PortfolioData } from '../portfolioData';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { BiCodeAlt, BiCodeBlock } from 'react-icons/bi';
import ModalGalleryImages from '../../../common/ModalGalleryImages/ModalGalleryImages';

type PortfolioItem = {
  portfolioItem: PortfolioData;
  screens: string[];
};

export const PortfolioItem: FC<PortfolioItem> = ({ portfolioItem, screens }) => {
  const [toggleGallery, setToggleGallery] = useState(false);

  return (
    <div className={s.portfolioItem}>
      {toggleGallery && (
        <ModalGalleryImages
          screens={screens}
          toggle={toggleGallery}
          setToggle={setToggleGallery}
        />
      )}
      <img src={portfolioItem.thumb} alt={'portfolio_img'} className={s.thumb} />
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
            <a href={portfolioItem.demoLink} target={'_blank'} rel="noreferrer">
              <BiCodeBlock className={s.showGalleryButton} />
            </a>
          </li>
          <li className={s.buttonItem}>
            <label className={s.iconLabel}>Code</label>
            <a href={portfolioItem.codeLink} target={'_blank'} rel="noreferrer">
              <BiCodeAlt className={s.showGalleryButton} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioItem;
