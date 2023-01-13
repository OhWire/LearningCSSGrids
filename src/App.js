import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/contact';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;
