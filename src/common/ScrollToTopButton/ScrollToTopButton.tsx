import React, { useEffect, useState } from 'react';
import s from './ScrollToTopButton.module.scss';
import { BsArrowUpShort } from 'react-icons/bs';
import { animateScroll as scroll, Link } from 'react-scroll';

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className={s.topToBtn} onClick={goToTop}>
      <BsArrowUpShort
        className={`${s.iconStyle} ${s.iconPosition} ${showTopBtn ? s.active : ''}`}
      />
    </div>
  );
};

export default ScrollToTopButton;
