import React from 'react';
import style from './MyPortfolio.module.css'

const MyPortfolio = () => {


    const renderSkilss = () => {
        return (
            <div className={style.skillItem}>
                <div className={style.imageCover}/>
                <button className={style.buttonStyle}>Watch</button>
                <div className={style.textBlock}>
                    <span className={style.textName}>Project Name</span>
                    <div className={style.descSkill}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <div className={style.blockName}>
                    <h3>My Portfolio</h3>
                </div>
                <div className={style.skillBlock}>

                    {renderSkilss()}
                    {renderSkilss()}


                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;