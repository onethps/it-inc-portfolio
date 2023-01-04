import React from 'react';
import style from './Skills.module.scss';
import SkillItem from './Skill-Item/Skill-Item';
import { skillsData, SkillsDataType } from './skillsDB';
import SectionTitle from '../../common/SectionTitle/SectionTitle';



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
