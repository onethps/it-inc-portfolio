import React from 'react';
import style from './Portfolio.module.scss';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { portfolioData } from './portfolioData';

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
