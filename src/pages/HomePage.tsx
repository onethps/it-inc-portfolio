import React, { useRef } from 'react';

import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts';

const HomePage = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (elemRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (elemRef.current) {
      window.scrollTo({
        top: elemRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout>
      <About scrollToSection={scrollToSection} skillsRef={ref} />
      <Skills skillsRef={ref} />
      <Works />
      <Contacts />
      <Footer />
    </Layout>
  );
};

export default HomePage;
