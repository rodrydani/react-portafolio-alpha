
import Home from "./components/Home"
import { useEffect, useState } from "react";
import './App.css'
import NavBar from './components/NavBar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading]=useState(true);

  useEffect(() => {
  setTimeout(()=>{
    setLoading(false);
  },4000);
  },[])
  
  return (
    <>
     {
           loading ?
           <div className="loader-cont">
             <span class="loader"></span>
           </div>
          
           :
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
    } 
    </>
  )
}

export default App
