import React, { FC, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import s from './ModalGalleryImages.module.scss';

type ModalGalleryImagesType = {
  toggle: boolean;
  setToggle: (bool: boolean) => void;
  screens: string[];
};

const ModalGalleryImages: FC<ModalGalleryImagesType> = ({
  toggle,
  setToggle,
  screens,
}) => {
  const [current, setCurrent] = useState(0);

  const onLeftPictureHandle = () => {
    if (current === 0) {
      setCurrent(screens.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  const onRightPictureHandle = () => {
    if (current === screens.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  return (
    <div className={s.container}>
      <div className={s.background} onClick={() => setToggle(!toggle)} />
      <BsFillArrowLeftCircleFill className={s.arrowLeft} onClick={onLeftPictureHandle} />
      <BsFillArrowRightCircleFill
        className={s.arrowRight}
        onClick={onRightPictureHandle}
      />
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <img src={screens[current]} />
        </div>
      </div>
    </div>
  );
};

export default ModalGalleryImages;
