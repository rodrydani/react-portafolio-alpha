
import Home from "./components/Home"
import './App.css'
import NavBar from './components/NavBar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import Footer from './components/Footer';

function App() {


  return (
    
    <div className="App">
       <NavBar/>
   <Home/>
   <br />
   <AboutMe/>
   <br />
   <Technologies></Technologies>
   <br />
   <Proyects/>
   <br />
   <Contact/>
   <div className='burbujas'>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
   </div>
  <Footer/>
    </div>
  )
}

export default App
