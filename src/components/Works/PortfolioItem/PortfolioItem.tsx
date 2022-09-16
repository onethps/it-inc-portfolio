import React, { FC } from 'react';
import style from './PortfolioItem.module.scss';
import { PortfolioData } from '../portfolioData';

type PorfolioItem = {
  portfolioItem: PortfolioData;
};

export const PortfolioItem: FC<PorfolioItem> = ({ portfolioItem }) => {
  return (
    <div className={style.mainItemPortfolioBlock}>
      <div className={style.imagePortfolioCover} />
      <div className={style.textPortfolioBlock}>
        <h4 className={style.textPortfolioTitle}>{portfolioItem.title}</h4>
        <div className={style.textPortfolioDescr}>{portfolioItem.description}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
