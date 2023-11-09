import React from 'react';

//import ImgMe from "../assets/Avatar.png"
import ImgDecoration from "../assets/decoration-001.png"
//import ImgCv from "../assets/cv-light.png"
import curriculumMio from "../assets/Rodrigo_Miranda_Curriculum_ES.pdf"
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const Home = ({Image, ImgCv}) => {
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/rodrigo-miranda-699311163/', '_blank')
    }

    const githandleClick =()=>{
        window.open('https://github.com/rodrydani/', '_blank')
    }
   
    return ( 
    <section className='section-home'>
        <div>
        <h1 className='welcome-hi'>
        <FormattedMessage id='id-home1' defaultMessage='home' />
        </h1>
        <h3 className='welcome-hi'>
        <FormattedMessage id='id-home2' defaultMessage='home' />
        <i class="fa-solid fa-gears"></i>
        <br />
        <FormattedMessage id='id-home2-0' defaultMessage='home' />
        <i class="fa-solid fa-gamepad"></i>
        </h3>
            <div className='image-present' id='id-Home'>
         <div className='imgMe-Conteiner'>
                 <img className='img-Me'  src={Image} alt="" />
            </div>
          
            <div className='text-present'>
                <div  style={{padding:"2rem"}}>
                 <h3 className='present-tittle'>
                 <FormattedMessage id='id-home3' defaultMessage='home' />
                 </h3>
            <p className='present-tittle'>
            <FormattedMessage id='id-home4' defaultMessage='home' />
            </p>
            <p className='present-tittle'>
            <FormattedMessage id='id-home5' defaultMessage='home' />
            </p>
            <p className='present-tittle home5-0'>
            <FormattedMessage id='id-home5-0' defaultMessage='home' /><i class="fa-brands fa-unity"></i>
            </p>
             <p className='present-tittle'><b>
             <FormattedMessage id='id-home6' defaultMessage='home' />
                </b></p>    
                </div>
        </div>
              {/*  <img className='Img-Decoration' src={ImgDecoration} alt="" />*/} 
          
            </div>
            
        
        </div>
        <div className='btn-link-home'>
            <button onClick={handleClick} type="button" class="btn btn-info" style={{zIndex:"1000"}} ><i class="fa-brands fa-linkedin"></i></button>
            <button onClick={githandleClick} type="button" class="btn btn-primary" style={{zIndex:"1000"}}><i class="fa-brands fa-github"></i></button>
            <button type="button" class="btn btn-warning" style={{zIndex:"1000"}}> <a href={curriculumMio} target="_blank"><img className='img-cv' src={ImgCv} alt="" /></a></button>
           </div>
        </section>
    );
};

export default Home;