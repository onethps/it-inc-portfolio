import React, { forwardRef, MutableRefObject } from 'react';
import style from './Skills.module.scss';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SkillItem from './Skill-Item/Skill-Item';

// eslint-disable-next-line react/display-name
const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <section className={style.mainSkillBlock} ref={skillsRef}>
      <div className={style.SkillsContainer}>
        <SectionTitle title={'My Skills'} />
        <div className={style.skillsBlock}>
          <SkillItem bgColor={'red'} />
          <SkillItem bgColor={'blue'} />
          <SkillItem bgColor={'yellow'} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
