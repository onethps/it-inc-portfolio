import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div>© 2022 All Rights Reserved.</div>
      <div>Email: admin@mail.site</div>
    </div>
  );
};

export default Footer;
