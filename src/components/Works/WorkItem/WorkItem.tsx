import React from 'react';
import style from './PortfolioItem.module.scss';

export const WorkItem = () => {
  return (
    <div className={style.mainItemPortfolioBlock}>
      <div className={style.imagePortfolioCover} />
      <div className={style.textPortfolioBlock}>
        <h4 className={style.textPortfolioTitle}>Todolist</h4>
        <div className={style.textPortfolioDescr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
