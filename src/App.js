import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className='AppWrapper'>
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
