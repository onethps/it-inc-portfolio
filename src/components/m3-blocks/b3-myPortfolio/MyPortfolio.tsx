import React from 'react';
import style from './MyPortfolio.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";
import PortfolioItem from "./p1-portfolioItem/PortfolioItem";

const MyPortfolio = () => {



    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                    <BlockTitle title={'My Portfolio'} />
                <div className={style.mainBlock}>
                 <PortfolioItem/>
                 <PortfolioItem/>
                 <PortfolioItem/>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;