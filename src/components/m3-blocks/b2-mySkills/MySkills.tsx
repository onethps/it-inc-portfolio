import React from 'react';
import style from './MySkills.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";

const MySkills = () => {

    const red = 'red'
    const blue = 'blue'
    const yellow = 'yellow'


    const renderSkilss = (bgColor:string) => {
        return (
            <div className={bgColor === 'red' ? style.skillItem : bgColor === 'blue' ? style.skillItem1:
                bgColor === 'yellow' ? style.skillItem2 : '' }>
                <div className={style.iconSkill}/>
                <h3 className={style.titleSkill}>React</h3>
                <p className={style.descSkill}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation
                </p>
            </div>
        )
    }



    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <div className={style.blockName}>
                    <BlockTitle title={'My Skills'} />
                </div>
                <div className={style.skillBlock}>

                    {renderSkilss(red)}
                    {renderSkilss(blue)}
                    {renderSkilss(yellow)}




                    </div>
                </div>
            </div>
    );
};

export default MySkills;