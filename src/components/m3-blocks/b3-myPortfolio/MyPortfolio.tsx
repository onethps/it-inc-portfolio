import React from 'react';
import style from './MyPortfolio.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";

const MyPortfolio = () => {


    const renderSkilss = () => {
        return (
            <div className={style.skillItem}>
                <div className={style.imageCover}/>
                <div className={style.textBlock}>
                    <h4 className={style.textName}>Todolist</h4>
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
                    <BlockTitle title={'My Portfolio'} />
                </div>
                <div className={style.skillBlock}>

                    {renderSkilss()}
                    {renderSkilss()}
                    {renderSkilss()}


                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;