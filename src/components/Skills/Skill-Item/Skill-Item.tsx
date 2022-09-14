import React from 'react';
import style from './Skill-Item.module.scss';

type SkillItemType = {
  bgColor?: string;
};

export const SkillItem = ({ bgColor }: SkillItemType) => {
  return (
    <div className={style.skillItemW}>
      <div
        className={
          bgColor === 'red'
            ? style.blueSkillItem
            : bgColor === 'blue'
            ? style.yellowSkillItem
            : bgColor === 'yellow'
            ? style.redSkillItem
            : ''
        }
      >
        <div className={style.iconSkill} />
        <h3 className={style.titleSkill}>React</h3>
        <p className={style.descSkill}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation
        </p>
      </div>
    </div>
  );
};

export default SkillItem;
