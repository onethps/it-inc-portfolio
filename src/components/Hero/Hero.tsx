import { ReactComponent as AvatarIcon } from 'assets/avatar.svg';
import { LinkIcon } from 'common/LinkIcon/LinkIcon';
import Shape from 'common/Shape/Shape';
import { links } from 'data/links.data';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

import style from './Hero.module.scss';

const Hero = ({
  scrollToSection,
  skillsRef,
}: {
  scrollToSection: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  skillsRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const scrollToSectionHandle = () => {
    scrollToSection(skillsRef);
  };

  const href =
    'https://github.com/onethps/it-inc-portfolio/raw/master/src/assets/download/CV_Eugene_Ivashina.pdf';

  return (
    <section id={'home'} className={style.home}>
      <Shape />

      <Fade>
        <div className={style.container}>
          <AvatarIcon className={style.avatar} />
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
            {links.map(link => (
              <LinkIcon key={link.id} href={link.href} Icon={link.icon} />
            ))}
          </ul>

          <a href={href} target={'_blank'} className={style.cvButton} rel="noreferrer">
            Download CV
          </a>

          <button className={style.scrollDown} onClick={scrollToSectionHandle}>
            <h4>Scroll Down</h4>
            <div className={style.mouse} />
          </button>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
