
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
  const [render, setRender] = useState("white")
  const themeDarkList = document.body.classList

  useEffect(() => {
    const localeStorageTheme = localStorage.getItem("theme")
    if (localeStorageTheme === 'dark') {
      setRender(localeStorageTheme)
      document.body.classList.add('theme__dark')
  }


  setTimeout(()=>{
    setLoading(false);
  },4000);
  },[render])

  const btnSwitch = () => {
    if (render === "dark") {
        setRender("white")
        localStorage.setItem('theme', "white")
        document.body.classList.remove('theme__dark')
    } else {
        localStorage.setItem('theme', "dark")
        setRender("dark")
        document.body.classList.add('theme__dark')
    }
}
  
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
   
   <AboutMe/>
   
   <Technologies></Technologies>
   
   <Proyects/>
  
   <Contact/>
   <div className="gear-animation">
    <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
      </div>  
      <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
      </div>  
      <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
      </div>  
   </div>
  
     

{/* <div className='burbujas'>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
    <div className='burbuja'></div>
   </div> */}
  
   <button type="button" className={`switch ${render === "dark" ? 'activeDark switchTheme-active'  :'switchTheme-active'}`} id='switch' onClick={btnSwitch}>
   <span><i class="fa-solid fa-moon"></i></span>
                    <span><i class="fa-solid fa-sun"></i></span>
     </button>
  <Footer/>
    </div>
    
    } 
    </>
  )
}

export default App
