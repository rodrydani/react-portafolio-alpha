import React from 'react';
import { useEffect } from 'react';
import curriculumMio from "../assets/Curriculum-academlo.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import imgAboutMe from "../assets/decortion-004.png"
const AboutMe = () => {
  const handleClickOne=()=>{
    window.open('https://certificates.academlo.com/en/verify/85930100436730/', '_blank')
}
const handleClickTwo=()=>{
  window.open('https://certificates.academlo.com/en/verify/22828910830147/', '_blank')
}
const handleClickThre=()=>{
  window.open('https://certificates.academlo.com/en/verify/31615424642365/', '_blank')
}
const handleClickFour=()=>{
  window.open('https://certificates.academlo.com/en/verify/09026267073814', '_blank')
}
useEffect(() => {
  AOS.init();
}, []);
    return (
      
      <section >
      <div className='Abaut-me' id='id-AbautMe' data-aos="fade-left" style={{transition:"1s"}}>
           <img className='imgAboutMe' src={imgAboutMe} alt=""  data-aos="zoom-in" style={{transition:"1s"}}/>
           <h1>SOBRE MI</h1>
          <div className='text-description'>
            <div  style={{padding:"1rem"}} >
              <h3>Mi interes sobre la programacion:</h3>
            <br />
            <p>
                 Podria decir que siempre tuve un interes nato, en lo que a tecnologia se refiere. Sin embargo, no fue hasta hace poco tiempo que decidi enbarcarme en este mundo. Sin duda fue una de las mejores decisiones que tome en mi vida. 
            </p>
              <br />
             <p>
              En Academlo encontre, mas que un oficio, una comunidad. Su gente es excelente y me hice de muy buenos compañeros.
             </p>  
            </div>
          
          </div>
          <h3 data-aos="zoom-in" style={{transition:"1s"}}>Certificados de Módulo:</h3>
          <br />
          <div className='certificate-div' data-aos="zoom-in" style={{transition:"1s"}}>
           <OverlayTrigger
              placement="left"
              overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                  <p  className="project-toolTip">
                  Fundamentos de Desarrollo Web:
                  <br />
                  duración: 105 horas
                  <br />
                  nivel: principiante
                    </p> 
              </Tooltip>}
              >
               {({ ref, ...triggerHandler }) =>(
                <button
                ref={ref}
                onClick={handleClickOne} type="button" class="btn btn-outline-warning " {...triggerHandler} ><i 
               
                class="fa-solid fa-graduation-cap"></i></button>

               )}
           </OverlayTrigger>
             <OverlayTrigger
                placement="top"
                overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                    <p  className="project-toolTip">
                    Desarrollo de Aplicaciones Web con React:
                    <br />
                    duración: 2 meses
                    <br />
                    nivel: profesional
                      </p> 
                </Tooltip>}
             >
                 {({ ref, ...triggerHandler }) =>(
                <button 
                ref={ref}
                onClick={handleClickTwo} type="button" class="btn btn-outline-info"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )}
             </OverlayTrigger>
             <OverlayTrigger
              placement="right"
              overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                  <p  className="project-toolTip">
                  Back-End Node:
                  <br />
                  duración: 2 meses
                  <br />
                  nivel: profesional
                    </p> 
              </Tooltip>}
             >
              {({ ref, ...triggerHandler }) =>(
               <button 
               ref={ref}
               onClick={handleClickThre} type="button" class="btn btn-outline-success"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )}
             </OverlayTrigger>
          </div>
          <h3 data-aos="zoom-in" style={{transition:"1s"}}>Certificados de carrera:</h3>
          <br />
          <div className='certificate-div' data-aos="zoom-in" style={{transition:"1s"}}>
            <OverlayTrigger
            placement="left"
            overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                <p  className="project-toolTip">
                Programa Full Stack de Desarollo:
                <br />
                duración: 5 meses
                <br />
                nivel: profesional
                  </p> 
            </Tooltip>}
            >
                {({ ref, ...triggerHandler }) =>(
                <button
                ref={ref}
                 onClick={handleClickFour} type="button" class="btn btn-outline-danger"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )} 
            </OverlayTrigger>
          </div>
          <br />
          <div >
          <button className='curri-button'  data-aos="zoom-in" style={{transition:"1s"}}>
         <a href={curriculumMio} target="_blank" className='curri-button'>Descarga Mi curriculum</a>
        </button>
          </div>
          <br />
        <div>

        </div>
       
        </div>
        
      </section>
       
    );
};

export default AboutMe;