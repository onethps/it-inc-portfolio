import ModalGalleryImages from 'common/ModalGalleryImages/ModalGalleryImages';
import { PortfolioData } from 'data/types';
import React, { FC, useState } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { BiCodeAlt, BiCodeBlock } from 'react-icons/bi';

import s from './PortfolioItem.module.scss';

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

      <img src={portfolioItem.thumb} alt={'portfolio-img'} className={s.thumb} />

      <div className={s.details}>
        <span className={s.label}>Web Application</span>
        <h1 className={s.title}>{portfolioItem.title}</h1>
        <ul className={s.moreButtonsList}>
          <li className={s.buttonItem}>
            <span className={s.iconLabel}>Screenshots</span>
            <AiOutlineZoomIn
              className={s.showGalleryButton}
              onClick={() => setToggleGallery(true)}
            />
          </li>
          <li className={s.buttonItem}>
            <span className={s.iconLabel}>Demo</span>
            <a href={portfolioItem.demoLink} target={'_blank'} rel="noreferrer">
              <BiCodeBlock className={s.showGalleryButton} />
            </a>
          </li>
          <li className={s.buttonItem}>
            <span className={s.iconLabel}>Code</span>
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
