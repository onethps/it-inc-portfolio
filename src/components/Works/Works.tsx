import React from 'react';
import style from './MyPortfolio.module.scss';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import WorkItem from './WorkItem/WorkItem';

const Works = () => {
  return (
    <section className={style.mainBox}>
      <div className={style.container}>
        <SectionTitle title={'My Portfolio'} />
        <div className={style.mainBlock}>
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
      </div>
    </section>
  );
};

export default Works;
