import React from 'react';
import { useEffect } from 'react';
import curriculumMio from "../assets/Rodrigo-Miranda-curriculum.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'


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
  AOS.init({
    offset: 50, 
    easing: 'ease-in-out', 
  });
}, []);
    return (
      
      <section >
      <div className='Abaut-me' id='id-AbautMe' data-aos="fade-left" style={{transition:"1s"}}>
         
           <h1>  <FormattedMessage id='id-about' defaultMessage='about' /></h1>
          <div className='text-description'>
            <div  style={{padding:"1rem"}} >
              <h3><FormattedMessage id='id-about2' defaultMessage='about' /></h3>
            <br />
            <p>
            <FormattedMessage id='id-about3' defaultMessage='about' /> 
            </p>
              <br />
            
            </div>
          
          </div>
          <h3 data-aos="zoom-in" style={{transition:"1s"}}> <FormattedMessage id='id-about16' defaultMessage='about' /> </h3>
          <br />
          <div className='certificate-div' data-aos="zoom-in" style={{transition:"1s", zIndex:"1000"}}>
           <OverlayTrigger
              placement="left"
              overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                  <p  className="project-toolTip">
                  <FormattedMessage id='id-about4' defaultMessage='about' /> 
                  <br />
                  <FormattedMessage id='id-about5' defaultMessage='about' />
                  <br />
                  <FormattedMessage id='id-about6' defaultMessage='about' />
                    </p> 
              </Tooltip>}
              >
               {({ ref, ...triggerHandler }) =>(
                <button
                ref={ref}
                onClick={handleClickOne} type="button" class="btn btn-outline-warning " style={{transition:"1s", zIndex:"1000"}} {...triggerHandler} ><i 
               
                class="fa-solid fa-graduation-cap"></i></button>

               )}
           </OverlayTrigger>
             <OverlayTrigger
                placement="top"
                overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                    <p  className="project-toolTip">
                    <FormattedMessage id='id-about7' defaultMessage='about' />
                    <br />
                    <FormattedMessage id='id-about8' defaultMessage='about' />
                    <br />
                    <FormattedMessage id='id-about9' defaultMessage='about' />
                      </p> 
                </Tooltip>}
             >
                 {({ ref, ...triggerHandler }) =>(
                <button 
                ref={ref}
                onClick={handleClickTwo} type="button" style={{transition:"1s", zIndex:"1000"}}  class="btn btn-outline-info"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )}
             </OverlayTrigger>
             <OverlayTrigger
              placement="right"
              overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                  <p  className="project-toolTip">
                  Back-End Node:
                  <br />
                  <FormattedMessage id='id-about10' defaultMessage='about' />
                  <br />
                  <FormattedMessage id='id-about11' defaultMessage='about' />
                    </p> 
              </Tooltip>}
             >
              {({ ref, ...triggerHandler }) =>(
               <button 
               ref={ref}
               onClick={handleClickThre} type="button" style={{transition:"1s", zIndex:"1000"}}  class="btn btn-outline-success"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )}
             </OverlayTrigger>
          </div>
          <h3 data-aos="zoom-in" style={{transition:"1s"}}> <FormattedMessage id='id-about17' defaultMessage='about' /> </h3>
          <br />
          <div className='certificate-div' data-aos="zoom-in" style={{transition:"1s", zIndex:"1000"}}>
            <OverlayTrigger
            placement="left"
            overlay={<Tooltip className='tooptip' style={{transition:".5s"}}>
                <p  className="project-toolTip">
                <FormattedMessage id='id-about12' defaultMessage='about' />
                <br />
                <FormattedMessage id='id-about13' defaultMessage='about' />
                <br />
                <FormattedMessage id='id-about14' defaultMessage='about' />
                  </p> 
            </Tooltip>}
            >
                {({ ref, ...triggerHandler }) =>(
                <button
                ref={ref}
                 onClick={handleClickFour} type="button" style={{transition:"1s", zIndex:"1000"}}  class="btn btn-outline-danger"><i class="fa-solid fa-graduation-cap" {...triggerHandler}></i></button>

               )} 
            </OverlayTrigger>
          </div>
          <br />
          <div >
          <button className='curri-button'  data-aos="zoom-in" style={{transition:"1s", zIndex:"1000"}}>
         <a href={curriculumMio} target="_blank" className='curri-button'><FormattedMessage id='id-about15' defaultMessage='about' /></a>
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