import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <div className={style.titleBlock}>
                <h3>Contacts</h3>
                </div>
                <div>
                <form className={style.contactFormBox}>
                    <input type="text" id="fname" name="fname"/>
                    <input type="text" id="lname" name="lname"/>
                    <textarea placeholder='Write SOme text'/>
                </form>
                    <button className={style.buttonSend} type="submit">Send</button>
                </div>
            </div>

        </div>
    );
};

export default Contacts;