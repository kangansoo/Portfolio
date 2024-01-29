import React, { useRef } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Projects from './components/Projects';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className='AppWrapper'>
      <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        expRef={expRef}
        projectsRef={projectsRef}
      />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Exp ref={expRef} />
      <Projects ref={projectsRef} />
      <Footer aboutRef={aboutRef} />
    </div>
  );
}

export default App;
