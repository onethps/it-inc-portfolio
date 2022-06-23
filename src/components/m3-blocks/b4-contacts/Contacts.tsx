import React from 'react';
import style from './Contacts.module.scss'
import BlockTitle from "../../../common/c1-BlockTitle/BlockTitle";
import CustomButton from "../../../common/c3-CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contacts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: "all",});

    const onSubmit = (data:any) => {
        axios.post('https://gmail-sender-onethps.herokuapp.com/sendMessage', data)
    }

    return (
      <div className={style.root}>
          <div className={style.container}>
              <BlockTitle title={'Contacts'}/>

              <form onSubmit={handleSubmit(onSubmit)} className={style.row}>
                  <div className={style.InputEmail}>
                      <input placeholder={'email'}
                        {...register("email", { required: true })} className={errors.email ? style.error : ''} />
                  </div>

                  <div className={style.InputName}>
                      <input placeholder={'name'}
                        {...register("name", { required: true })} className={errors.name ? style.error : ''} />
                  </div>

                  <div className={style.Subject}>
                      <input placeholder={'subject'}
                        {...register("subject", { required: true })} className={errors.subject ? style.error : ''} />
                  </div>

                  <textarea placeholder={'message'}
                    {...register("message", { required: true })}  rows={10} className={errors.message ? style.error : ''}/>
                  <CustomButton text={'Submit'} type={'submit'} customClassName={style.buttonStyle}/>

              </form>

          </div>
      </div>
    );
};



export default Contacts;