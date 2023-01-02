import React from 'react';
import curriculumMio from "../assets/Curriculum-academlo.pdf"

import imgAboutMe from "../assets/decortion-004.png"
const AboutMe = () => {
  const handleClickOne=()=>{
    window.open('https://certificates.academlo.com/en/verify/85930100436730/', '_blank')
}
const handleClickTwo=()=>{
  window.open('https://certificates.academlo.com/en/verify/22828910830147/', '_blank')
}
    return (
      
      <section>
      <div className='Abaut-me' id='id-AbautMe'>
           <img className='imgAboutMe' src={imgAboutMe} alt="" />
           <h1>SOBRE MI</h1>
          <div className='text-description'>
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
          <h3>Certificados:</h3>
          <br />
          <div className='certificate-div'>
               <button onClick={handleClickOne} type="button" class="btn btn-outline-success"><i class="fa-solid fa-file"></i></button>
               <button onClick={handleClickTwo} type="button" class="btn btn-outline-light"><i class="fa-solid fa-file"></i></button>
          </div>
       
          <br />
          <div className='button-curriculum'>
          <button type="button" class="btn btn-outline-warning">
         <a href={curriculumMio} target="_blank">Descarga Mi curriculum</a>
        </button>
          </div>
        <div>

        </div>
       
        </div>
        
      </section>
       
    );
};

export default AboutMe;