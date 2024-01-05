import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Projects from './components/Projects';

function App() {
  return (
    <div className='AppWrapper'>
      <Header />
      <About />
      <Skills />
      <Exp />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
