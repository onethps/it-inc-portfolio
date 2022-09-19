import React, { useState } from 'react';
import style from './Portfolio.module.scss';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { portfolioData } from './portfolioData';
import ModalGalleryImages from '../../common/ModalGalleryImages/ModalGalleryImages';

const Portfolio = () => {
  const [toggleGallery, setToggleGallery] = useState(false);

  return (
    <section className={style.container} id={'portfolio'}>
      <div className={style.wrapper}>
        <SectionTitle title={'My Portfolio'} />
        {toggleGallery ? (
          <ModalGalleryImages toggle={toggleGallery} setToggle={setToggleGallery} />
        ) : null}
        <div className={style.portfolioList}>
          {portfolioData.map(portfolioItem => {
            return (
              <PortfolioItem
                key={portfolioItem.id}
                setToggleGallery={setToggleGallery}
                portfolioItem={portfolioItem}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
