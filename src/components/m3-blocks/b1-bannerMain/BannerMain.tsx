import React from 'react';
import style from './BannerMain.module.scss'

const BannerMain = () => {
    return (
        <div className={style.BannerMain}>
            <div className={style.container}>

                <div className={style.textContainer}>
                    <h2>Hello, I Am</h2>
                    <h1>Name Surn</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptareu
                        dolore eu fugiat nulla pariatur.
                    </p>


                    <div className={style.BannerMainButton}>
                    <a href={'/#home'}>Download CW</a>
                    </div>
                    <a href={'/#home'} className={style.seeButton}>See My Work</a>

                </div>
                <img alt={'photo'} src={'https://html.designingmedia.com/folioflix-dark/assets/image/banner-right-img.png'}/>

            </div>

        </div>
    );
};

export default BannerMain;