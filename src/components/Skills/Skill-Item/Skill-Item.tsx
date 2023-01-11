import { SkillsDataType } from 'data/skills.data';
import React, { FC } from 'react';

import style from './Skill-Item.module.scss';

type SkillItem = {
  skill: SkillsDataType;
};

export const SkillItem: FC<SkillItem> = ({ skill }) => {
  return (
    <div className={style.container}>
      <div className={style[skill.cardColor]}>
        <img className={style.icon} src={skill.icon} />
        <h2 className={style.title}>{skill.Title}</h2>
        <p className={style.desc}>{skill.Skills}</p>
      </div>
    </div>
  );
};

export default SkillItem;
