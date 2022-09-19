import React, { FC, useState } from 'react';
import s from './ModalGalleryImages.module.scss';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import src1 from '../../assets/PortfolioScreens/learn-cards.png';
import src2 from '../../assets/PortfolioScreens/simple-video-service.png';
import src3 from '../../assets/PortfolioScreens/react-native-chat.png';

type ModalGalleryImagesType = {
  toggle: boolean;
  setToggle: (bool: boolean) => void;
};

const ModalGalleryImages: FC<ModalGalleryImagesType> = ({ toggle, setToggle }) => {
  const [current, setCurrent] = useState(0);

  const images = [
    {
      id: 1,
      src: src1,
    },
    {
      id: 2,
      src: src2,
    },
    {
      id: 3,
      src: src3,
    },
  ];

  const onLeftPictureHandle = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  const onRightPictureHandle = () => {
    if (current === images.length - 1) {
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
          <img src={images[current].src} />
        </div>
      </div>
    </div>
  );
};

export default ModalGalleryImages;
