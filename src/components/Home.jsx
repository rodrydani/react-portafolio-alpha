import React from 'react';
import ImgBack from "../assets/imagenbackcf.png"
import ImgMe from "../assets/imagen-perfil.png"
import ImgDecoration from "../assets/decoration-001.png"
import curriculumMio from "../assets/Rodrigo-Miranda-curriculum.pdf"
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const Home = () => {
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
        <i class="fa-solid fa-gears"></i></h3>
            <div className='image-present' id='id-Home'>
          
            <div className='imgMe-Conteiner'>
                 <img className='img-Me'  src={ImgMe} alt="" />
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
            
             <p className='present-tittle'><b>
             <FormattedMessage id='id-home6' defaultMessage='home' />
                </b></p>    
                </div>
            </div>
            <img className='Img-Decoration' src={ImgDecoration} alt="" />
          
            </div>
            
        
        </div>
        <div className='btn-link-home'>
            <button onClick={handleClick} type="button" class="btn btn-info" style={{zIndex:"1000"}} ><i class="fa-brands fa-linkedin"></i></button>
            <button onClick={githandleClick} type="button" class="btn btn-primary" style={{zIndex:"1000"}}><i class="fa-brands fa-github"></i></button>
            <button type="button" class="btn btn-danger" style={{zIndex:"1000"}}> <a href={curriculumMio} target="_blank"><i class="fa-solid fa-file-pdf"></i></a></button>
           </div>
        </section>
    );
};

export default Home;