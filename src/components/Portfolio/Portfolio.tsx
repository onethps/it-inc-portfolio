import SectionTitle from 'common/SectionTitle/SectionTitle';
import { portfolioData } from 'data/portfolio.data';
import React from 'react';

import style from './Portfolio.module.scss';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <section id={'portfolio'}>
      <SectionTitle title={'My Portfolio'} />
      <div className={style.portfolioList}>
        {portfolioData.map(portfolioItem => {
          return (
            <PortfolioItem
              key={portfolioItem.id}
              screens={portfolioItem.screens}
              portfolioItem={portfolioItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
