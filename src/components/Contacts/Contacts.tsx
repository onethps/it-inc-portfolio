import React, { MutableRefObject, useRef, useState } from 'react';
import style from './Contacts.module.scss';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { emailValidation, nameRegex } from '../../utils/validations.utils';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type IFormInputs = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const Contacts = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const {
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: 'onChange' });

  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const fetchEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true)
    try {
      await emailjs.sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`,
      );
      toast.success('Данные отправлены');
      reset();
      setIsFetching(false)
    } catch (err) {
      toast.error('Ошибка отправки');
      setIsFetching(false)
    }
  };

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

        <form ref={form} onSubmit={fetchEmail} className={style.contactForm}>
          <div className={style.InputEmail}>
            <input
              placeholder={'Your email'}
              {...register('email', {
                required: 'Please enter your email address',
                pattern: {
                  value: emailValidation,
                  message: 'Invalid email address',
                },
              })}
              className={errors.email ? style.error : ''}
            />
          </div>

          <div className={style.InputName}>
            <input
              placeholder={'Enter your name'}
              {...register('name', {
                required: true,
                pattern: {
                  value: nameRegex,
                  message: 'Invalid Name',
                },
              })}
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
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contacts;
