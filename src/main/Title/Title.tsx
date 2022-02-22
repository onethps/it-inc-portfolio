import React from 'react';
import style from './Title.module.css'

const Title = () => {
    return (
        <div className={style.titleBlock}>
            <div className={style.container}>
                <div className={style.welcomeBlock}>
                    <h2>Hi, My name is Ivan Ivanov</h2>
                    <h3>Im front-end developer</h3>
                </div>
                <div className={style.photoStyle}>

                </div>
            </div>
        </div>
    );
};

export default Title;