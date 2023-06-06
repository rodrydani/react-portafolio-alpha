
import Home from "./components/Home"
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import NavBar from './components/NavBar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import Footer from './components/Footer';
import imgEs from "./assets/spain.png";
import imgUs from "./assets/usa.png";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import messageES from '../src/lang/es-ES.json';
import messageUS from '../src/lang/en-US.json';
import ParticlesBackground from "./components/ParticlesBackground";
import LoadingScreen from './components/LoadingScreen';

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const [messages, setMessages] = useState(messageUS)

  const [render, setRender] = useState("white")
  const [locale, setLocale] = useState('en-US')
  const themeDarkList = document.body.classList

  useEffect(() => {
    const localeStorageTheme = localStorage.getItem("theme")
    const localeStorageLang = localStorage.getItem("lang")
   

    if (localeStorageTheme === 'dark') {
      setRender(localeStorageTheme)
      document.body.classList.add('theme__dark')
  }

  if (localeStorageLang === "es-ES") {
    setMessages(messageES)
    setLocale("es-ES")

} else if (localeStorageLang === "en-US") {
    setMessages(messageUS)
    setLocale("en-US")
}

  setTimeout(()=>{
 
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

const setLanguage = (lenguage) => {
  // alert('lenguaje seleccionado ' + lenguage)
  if (lenguage === "es-ES") {
      setMessages(messageES)
      setLocale("es-ES")
      localStorage.setItem('lang', "es-ES")

  } else if (lenguage === "en-US") {
      setMessages(messageUS)
      setLocale("en-US")
      localStorage.setItem('lang', "en-US")
  }
}
  

  return ( <>
    {isLoading && <LoadingScreen />} 
    <IntlProvider messages={messages} locale={locale}> 
    <>
           <div className="App">
      <ParticlesBackground />
      
       <NavBar/>
       {isLoading && <LoadingScreen />} 
   <Home/>
  
   <AboutMe/>
   
   <Technologies></Technologies>
   
   <Proyects/>
  
   <Contact/>
   {/*<div className="gear-animation">
    <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
      </div>  
      <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
      </div>  
      <div className="gear-traslate">
      <i  class="fa-solid fa-gear"></i>
     </div>  
   </div>*/}
  
     


  
   <button type="button" className={`switch ${render === "dark" ? 'activeDark switchTheme-active'  :'switchTheme-active'}`} id='switch' onClick={btnSwitch}>
   <span><i class="fa-solid fa-moon"></i></span>
                    <span><i class="fa-solid fa-sun"></i></span>
     </button>
      {/*button lenguage */}
     <div className="btn-lenguage">
      <button className="btn-es" onClick={() => setLanguage("es-ES")}>
      <img className="esImg" src={imgEs} alt="" />
      </button >
      <button  className="btn-us" onClick={() => setLanguage("en-US")} >
      <img className="usImg" src={imgUs} alt="" />
      </button>
     </div>
      {/*button lenguage */}
  <Footer/>
  </div>
 
    

    </>
    </IntlProvider></>
  )
 
}

export default App
