import React from 'react';
import s from './BlockTitle.module.scss'

type BlockTitleType = {
    title:string
}

const BlockTitle = ({title,}:BlockTitleType) => {
    return (
        <div className={s.blockTitleBox}>
                     <h3>{title}</h3>
        </div>
    );
};

export default BlockTitle;