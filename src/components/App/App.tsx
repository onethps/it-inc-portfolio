import React, { useRef } from 'react';
import Layout from '../Layout/Layout';

import Skills from '../Skills/Skills';

import Contacts from '../Contacts/Contacts';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';

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
      <Home scrollToSection={scrollToSection} skillsRef={ref} />
      <Skills skillsRef={ref} />
      <Portfolio />
      <Contacts />
    </Layout>
  );
}

export default App;
