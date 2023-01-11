import React, { useRef } from 'react';

import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

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
