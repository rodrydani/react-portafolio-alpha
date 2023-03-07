import React from 'react';
import { useEffect, useState } from 'react';
import reactEcommerce from "../assets/reactEcommerce-page.png";
import pokeDexPage from "../assets/pokedex-page.png";
import userPage from "../assets/users-page.png";
import RyMpage from "../assets/RyM-page.png";
import phrasePage from "../assets/phrase-page.png";
import ecommerce from "../assets/e-commerce.png"
import weatherApp from "../assets/weather-page.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from "../assets/portfolio.png";
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Proyects = () => {

   useEffect(() => {
      AOS.init();
    }, []);
    return (
     
     <div className='project-container' data-aos="fade-left" style={{transition:".5s"}}>
      <h1 className='project-tittle'>Proyectos</h1>
      <br />
       
       
                
              
          
           <section className='Proyects' id='id-Proyects'>
           <OverlayTrigger
                 
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p  className="project-toolTip">E-commerce hecho con reactJs.
                          Para los estilos se utilizo 
                          Css y bootstrap.
                          Se utilizo una API de productos
                          y Se agrego un Login
                        Se utilizo React Router, redux 
                        y html.
                         </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                     <a href="https://coruscating-alfajores-f77dfe.netlify.app/#/" target="_blank"
                     className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                     >
                           <button
                    className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={reactEcommerce}
                           />
                       </button>
                     </a>
                    
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con react Router
                         y redux.
                         Los pokemons se trajeron
                         de una API con sus 
                         caracteristicas
                        </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                         <a href="https://deft-zuccutto-b00fa6.netlify.app/" target="_blank"
                         className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                         >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={pokeDexPage}
                           />
                       </button>
                       </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="left"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p  className="project-toolTip">App hecha con reactJs.
                       CRUD’s y métodos HTTP.
                       Los login se guardan
                       en una API.
                        </p> 

                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                     <a href="https://transcendent-crumble-ab19b3.netlify.app/" target="_blank"
                     className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                     >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={userPage}
                           />
                       </button>
                       </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con reactJs.
                        se consumio la API de
                        rick and morty.
                        se utilizaron Listas,
                        keys, imputs controlados 
                        y renderizado condicional
                        </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                       <a href="https://timely-licorice-a0b5b7.netlify.app/" target="_blank"
                       className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                       >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={RyMpage}
                           />
                       </button>
                       </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con reactJs
                       se utilizo jn .json de frases.
                       </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                      <a href="https://strong-otter-455114.netlify.app/" target="_blank"
                      className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                      >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={phrasePage}
                           />
                       </button> </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="bottom"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con reactJs.
                        Se consumio la API del clima.
                        Los estilos se hicieron con css.
                        </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                      <a href="https://kaleidoscopic-starship-99c2a1.netlify.app/" target="_blank"
                      className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                      >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={weatherApp}
                           />
                       </button> </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con JS vanilla.
                        Se utilizo HTML, CSS y JS.
                        </p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                      <a href="https://jade-sunshine-189d37.netlify.app/" target="_blank"
                      className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                      >
                       <button
                         className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={ecommerce}
                           />
                       </button> </a>
                   )}
               </OverlayTrigger>
               <OverlayTrigger
                   placement="right"
                   overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                       <p className="project-toolTip">App hecha con JS vanilla.
                        Se utilizo HTML, CSS y JS.</p> 
                   </Tooltip>}
               >
                   {({ ref, ...triggerHandler }) => (
                      <a href="https://stellar-bombolone-10bd92.netlify.app/" target="_blank"
                      className='proyect-card' data-aos="zoom-in" style={{transition:".5s"}}
                      >
                       <button
                       className='button-project'
                           variant="dark"
                           {...triggerHandler}   
                       >
                           <Image
                               className='img-project'
                               ref={ref}
                               src={Portfolio}
                           />
                       </button> </a>
                   )}
               </OverlayTrigger>
            </section>
            </div>
           
    );
};

export default Proyects;