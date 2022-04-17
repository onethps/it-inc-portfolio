import React from 'react';
import s from './CustomButton.module.scss'

type CustomButtonType = {
    text?:string
    customClassName?:string
}


export const CustomButton = ({text, customClassName}:CustomButtonType) => {

    const customClass = customClassName ? `${customClassName} ${s.newButton}` : `${s.newButton}`

    return (
        <div>
            <button className={customClass}>{text}</button>
        </div>
    );
};

export default CustomButton;