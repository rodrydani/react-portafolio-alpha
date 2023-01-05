import React from 'react';
import { useEffect } from 'react';
import curriculumMio from "../assets/Curriculum-academlo.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

import imgAboutMe from "../assets/decortion-004.png"
const AboutMe = () => {
  const handleClickOne=()=>{
    window.open('https://certificates.academlo.com/en/verify/85930100436730/', '_blank')
}
const handleClickTwo=()=>{
  window.open('https://certificates.academlo.com/en/verify/22828910830147/', '_blank')
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
          <h3 data-aos="zoom-in" style={{transition:"1s"}}>Certificados:</h3>
          <br />
          <div className='certificate-div' data-aos="zoom-in" style={{transition:"1s"}}>
               <button onClick={handleClickOne} type="button" class="btn btn-outline-success"><i class="fa-solid fa-graduation-cap"></i></button>
               <button onClick={handleClickTwo} type="button" class="btn btn-outline-info"><i class="fa-solid fa-graduation-cap"></i></button>
          </div>
       
          <br />
          <div >
          <button className='curri-button'  data-aos="zoom-in" style={{transition:"1s"}}>
         <a href={curriculumMio} target="_blank" className='curri-button'>Descarga Mi curriculum</a>
        </button>
          </div>
        <div>

        </div>
       
        </div>
        
      </section>
       
    );
};

export default AboutMe;