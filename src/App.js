import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
    </>
  );
};

export default App;
