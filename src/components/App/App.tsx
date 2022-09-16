import React, { useRef } from 'react';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Skills from '../Skills/Skills';

import Contacts from '../Contacts/Contacts';
import Portfolio from '../Works/Portfolio';

function App() {
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
      <Portfolio />
      <Contacts />
    </Layout>
  );
}

export default App;
