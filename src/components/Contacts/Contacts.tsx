import React from 'react';
import style from './Contacts.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CustomButton from '../../common/CustomButton/CustomButton';

export type ContactsDataType = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const Contacts = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ContactsDataType>({ mode: 'all' });

  const onSubmit: SubmitHandler<ContactsDataType> = data => {
    axios
      .post('https://gmail-sender-onethps.herokuapp.com/sendMessage', data)
      .catch(err => console.log(err));
  };

  return (
    <section className={style.root}>
      <div className={style.container}>
        <SectionTitle title={'Contacts'} />

        <form onSubmit={handleSubmit(onSubmit)} className={style.row}>
          <div className={style.InputEmail}>
            <input
              placeholder={'email'}
              {...register('email', { required: true })}
              className={errors.email ? style.error : ''}
            />
          </div>

          <div className={style.InputName}>
            <input
              placeholder={'name'}
              {...register('name', { required: true })}
              className={errors.name ? style.error : ''}
            />
          </div>

          <div className={style.Subject}>
            <input
              placeholder={'subject'}
              {...register('subject', { required: true })}
              className={errors.subject ? style.error : ''}
            />
          </div>

          <textarea
            placeholder={'message'}
            {...register('message', { required: true })}
            rows={10}
            className={errors.message ? style.error : ''}
          />
          <CustomButton
            text={'Submit'}
            type={'submit'}
            customClassName={style.buttonStyle}
          />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
