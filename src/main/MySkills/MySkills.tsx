import React from 'react';
import style from './MySkills.module.css'

const MySkills = () => {


    const renderSkilss = () => {
        return (
            <div className={style.skillItem}>
                <div className={style.iconSkill}/>
                <div className={style.titleSkill}>React</div>
                <div className={style.descSkill}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation
                </div>
            </div>
        )
    }

    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <div className={style.blockName}>
                    <h3>My Skills</h3>
                </div>
                <div className={style.skillBlock}>

                    {renderSkilss()}
                    {renderSkilss()}
                    {renderSkilss()}
                    {renderSkilss()}
                    {renderSkilss()}
                    {renderSkilss()}



                    </div>
                </div>
            </div>
    );
};

export default MySkills;