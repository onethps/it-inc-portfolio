import React, { useEffect, useState } from 'react';
import style from './Contacts.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import axios from 'axios';
import { emailValidation, nameRegex } from '../../utils/validations.utils';

export type IFormInputs = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const Contacts = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isSuccessSendEmail, setIsSuccessSendEmail] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<IFormInputs>({mode:'onChange'});

  const fetchEmail = async (emailSendData: IFormInputs) => {
    setIsFetching(true);
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_EMAIL_LINK}/sendMessage`,
        emailSendData,
      );
      setIsFetching(false);
      if (data.statusText === 'OK') {
        setIsSuccessSendEmail(true);
      }
    } catch (err) {
      setIsFetching(false);
      throw new Error(err as string);
    }
  }

  const onSubmit: SubmitHandler<IFormInputs> = data => fetchEmail(data)


  useEffect(() => {
    if (isSuccessSendEmail) {
      const timerId = setTimeout(() => {
        setIsSuccessSendEmail(false);
      }, 5000);

      return () => clearInterval(timerId);
    }
  }, [isSuccessSendEmail]);

  return (
    <section id={'contacts'}>
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
              {...register('email', { required: "Please enter your email address", pattern: {
                value: emailValidation,
                message: "Invalid email address"
              } })}
              className={errors.email ? style.error : ''}
            />
          </div>

          <div className={style.InputName}>
            <input
              placeholder={'Enter your name'}
              {...register('name', { required: true, pattern: {
                value: nameRegex,
                message: 'Invalid Name'
              } })}
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
            {isFetching ? (
              <div>Loading....</div>
            ) : (
              <button type={'submit'}>Send Message</button>
            )}
          </div>
          {isSuccessSendEmail ? <span>Your message has been sent!</span> : null}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
