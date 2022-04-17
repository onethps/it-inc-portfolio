import React from 'react';
import style from './Contacts.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";
import CustomButton from "../../../common/c3-CustomButton/CustomButton";

const Contacts = () => {
    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <BlockTitle title={'Contacts'}/>

                <form >

                    <div className={style.row}>

                        <div className={style.InputEmail}>
                            <input type="email" id="emailHelp" name="emailHelp" placeholder="Email" autoComplete="off" className={style.inputCustom}/>
                        </div>

                        <div className={style.InputName}>
                            <input type="name" id="name" name="name" placeholder="Name" autoComplete="off" className={style.inputCustom}/>
                        </div>

                        <div className={style.Subject}>
                            <input type="subject" id="subject" name="subject" placeholder="subject" autoComplete="off" className={style.inputSubject}/>
                        </div>

                        <textarea placeholder='Write message' rows={10}/>

                        {/*<button className={style.buttonSend} type="submit">Send</button>*/}

                        <CustomButton text={'Submit'} customClassName={style.buttonStule}/>
                    </div>
                </form>

            </div>
        </div>
    );
};



export default Contacts;