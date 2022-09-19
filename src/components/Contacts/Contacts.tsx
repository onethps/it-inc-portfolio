import React, { useEffect, useState } from 'react';
import style from './Contacts.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import axios from 'axios';

export type ContactsDataType = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [sendMessageStatus, setSendMessageStatus] = useState(false);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<ContactsDataType>();

  const onSubmit: SubmitHandler<ContactsDataType> = async senderData => {
    setLoading(true);
    try {
      const data = await axios.post(
        'https://gmail-sender-onethps.herokuapp.com/sendMessage',
        senderData,
      );
      reset({ email: '', message: '', name: '', subject: '' });

      setLoading(false);
      if (data.statusText === 'OK') {
        setSendMessageStatus(true);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (sendMessageStatus) {
      const timerId = setTimeout(() => {
        setSendMessageStatus(false);
      }, 5000);

      return () => clearInterval(timerId);
    }
  }, [sendMessageStatus]);

  return (
    <section className={style.root} id={'contacts'}>
      <SectionTitle title={'Get in Touch'} />
      <div className={style.container}>
        <div className={style.contactInfo}>
          <h2>Let&apos;s talk about everything!</h2>
          <span>
            Don&apos;t like forms? Send me an <span>email</span>. 👋
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={style.contactForm}>
          <div className={style.InputEmail}>
            <input
              placeholder={'Your email'}
              {...register('email', { required: true })}
              className={errors.email ? style.error : ''}
            />
          </div>

          <div className={style.InputName}>
            <input
              placeholder={'Enter your name'}
              {...register('name', { required: true })}
              className={errors.name ? style.error : ''}
            />
          </div>

          <div className={style.Subject}>
            <input
              placeholder={'Enter Subject'}
              {...register('subject', { required: true })}
              className={errors.subject ? style.error : ''}
            />
          </div>

          <textarea
            placeholder={'Enter your message...'}
            {...register('message', { required: true })}
            rows={10}
            className={errors.message ? style.error : ''}
          />
          <div className={style.buttonBlock}>
            {loading ? (
              <div>loading....</div>
            ) : (
              <button type={'submit'}>Send Message</button>
              // <CustomButton text={'Send message'} type={'submit'} />
            )}
          </div>
          {sendMessageStatus ? <span>Your message has been sent!</span> : null}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
