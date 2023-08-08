import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutMe from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';


function App() {
  return (
    <>
    <BrowserRouter basename="/"> 
      <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
    </Routes>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
