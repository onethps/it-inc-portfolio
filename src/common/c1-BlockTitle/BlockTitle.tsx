import React from 'react';
import style from './BlockTitle.module.scss'

type BlockTitleType = {
    title:string
}

export const BlockTitle = ({title}:BlockTitleType) => {
    return (
        <div className={style.blockTitleBox}>
                     <h3>{title}</h3>
        </div>
    );
};

export default BlockTitle;