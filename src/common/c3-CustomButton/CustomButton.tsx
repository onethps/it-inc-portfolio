import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './CustomButton.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonType = DefaultButtonPropsType & {
    text?:string
    customClassName?:string
}


export const CustomButton = ({text, customClassName, onClick}:CustomButtonType) => {

    const customClass = customClassName ? `${customClassName} ${s.newButton}` : `${s.newButton}`

    return (
      <div>
          <button onClick={onClick} className={customClass}>{text}</button>
      </div>
    );
};

export default CustomButton;