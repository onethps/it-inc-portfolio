import React from 'react';
import style from './Home.module.scss';
import avatar from '../../assets/avatar.svg';

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';
import Shape from '../../common/Shape/Shape';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

const Home = ({
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
    <section id={'home'} className={style.home}>
      <Shape />
      <Fade>
        <div className={style.container}>
          <img src={avatar} className={style.avatar} />
          <h2 className={style.nameHeader}>Ivashina Eugene</h2>

          <ReactTypingEffect
            speed={100}
            typingDelay={0}
            eraseDelay={500}
            text={`I'm Front-End Developer`}
            displayTextRenderer={text => {
              return <h3 className={style.headerTypingInfo}>{text}</h3>;
            }}
          />
          <ul className={style.socialLinksList}>
            <li>
              <a href={'https://github.com/onethps'} target="_blank" rel="noreferrer">
                <AiFillGithub className={style.linkIcon} />
              </a>
            </li>
            <li>
              <a
                href={'https://www.linkedin.com/in/eugen-ivashina/'}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className={style.linkIcon} />
              </a>
            </li>
            <li>
              <a
                href={'https://www.instagram.com/xlimit111/'}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className={style.linkIcon} />
              </a>
            </li>
            <li>
              <a href={'mailto: onethps@gmail.com'}>
                <AiFillMail className={style.linkIcon} />
              </a>
            </li>
          </ul>

          <a
            href="https://github.com/onethps/it-inc-portfolio/raw/master/src/assets/download/CV_Eugene_Ivashina.pdf"
            target={'_blank'}
            className={style.cvButton}
          >
            Download CV
          </a>

          <div className={style.scrollDown} onClick={scrollToSectionHandle}>
            <h4>Scroll Down</h4>
            <div className={style.mouse} />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Home;
