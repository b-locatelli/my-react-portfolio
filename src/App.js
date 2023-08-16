import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';
import AboutMe from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume'


function App() {
  return (
    <>
    <HashRouter basename="/"> 
      <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<AboutMe />} />
    </Routes>
    <div>
      <Footer/>
    </div>
    </HashRouter>
    </>
  );
}

export default App;
