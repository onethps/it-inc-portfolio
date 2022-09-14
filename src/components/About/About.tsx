import React, { forwardRef } from 'react';
import style from './About.module.scss';
import avatar from '../../assets/avatar.svg';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import Shape from '../../common/Shape/Shape';

// eslint-disable-next-line react/display-name
const About = ({
  scrollToSection,
  skillsRef,
}: {
  scrollToSection: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  skillsRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const scrollToSectionHandle = () => {
    scrollToSection(skillsRef);
  };

  return (
    <section className={style.about} id={'home'}>
      <Shape />
      <div className={style.container}>
        <img src={avatar} className={style.avatar} />
        <h2>Ivashina Eughen</h2>
        <h3>I&apos;m Front-End Developer</h3>
        <div className={style.socialLinks}>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillMail />
        </div>
        <div className={style.buttonsBox}>
          <a href={'/#home'}>Download CW</a>
        </div>
        <div className={style.scrollDown} onClick={scrollToSectionHandle}>
          <div>Scroll Down</div>
          <div className={style.mouse} />
        </div>
      </div>
    </section>
  );
};

export default About;
