import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Login from './components/loginHeader/Login';

function App() {
  return (
    <> 
          <Login />
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />

    
    </>
    )
}

export default App;
