import SectionTitle from 'common/SectionTitle/SectionTitle';
import { skillsData } from 'data/skills.data';
import { SkillsDataType } from 'data/types';
import React from 'react';

import SkillItem from './Skill-Item/Skill-Item';
import style from './Skills.module.scss';

const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <section ref={skillsRef} id={'skills'}>
      <SectionTitle title={'My Skills'} />
      <div className={style.skillsList}>
        {skillsData.map((skill: SkillsDataType) => {
          return <SkillItem key={skill.id} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
