import React, { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import s from './ScrollToTopButton.module.scss';

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
    <button type="button" className={s.ToTopIconButton} onClick={goToTop}>
      <BsArrowUpShort
        className={`${s.iconStyle} ${s.iconPosition} ${showTopBtn ? s.active : ''}`}
      />
    </button>
  );
};

export default ScrollToTopButton;
