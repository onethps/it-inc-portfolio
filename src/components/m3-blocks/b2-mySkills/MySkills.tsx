import React from 'react';
import style from './MySkills.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";
import SkillItem from "./s1-skillItem/SkillItem";

const MySkills = () => {


    return (
        <div className={style.mainSkillBlock}>
            <div className={style.SkillsContainer}>
                <BlockTitle title={'My Skills'} />
                <div className={style.skillsBlock}>
                    <SkillItem bgColor={'red'}/>
                    <SkillItem bgColor={'blue'}/>
                    <SkillItem bgColor={'yellow'}/>
                    </div>

            </div>
        </div>
    );
};

export default MySkills;