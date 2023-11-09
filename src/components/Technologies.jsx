import React from 'react';
import { useEffect } from 'react';
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import JavaScriptLogo from "../assets/js.png";
import ReactLogo from "../assets/reactjs.png";
import BootstrapLogo from "../assets/bootstrap.png";
import reduxLogo from "../assets/redux.png";
import nodeLogo from "../assets/nodejs-logo.png";
import postgresLogo from "../assets/584815fdcef1014c0b5e497a.png";
import npmLogo from "../assets/npm-logo.png";
import sequelizeLogo from "../assets/sequelize-logo.png";
import dbeaverLogo from "../assets/DBeaver_logo.svg.png";
import swaggerLogo from "../assets/Swagger-logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import Slider from "react-slick";
import { useRef } from 'react';

const Technologies = () => {

    useEffect(() => {
        AOS.init({
          offset: 10, 
          easing: 'ease-in-out', 
        });
      }, []);

      const sliderRef = useRef(null); // Referencia al componente Slider

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Retrocede a la diapositiva anterior
    }};
    const goToNextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Retrocede a la diapositiva anterior
      }}
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: false 
        };
    return (
        <>
      
  <h1 className='tech-tittle'><FormattedMessage id='id-tech' defaultMessage='tech' /></h1>
 

     <Slider {...settings }ref={sliderRef}>    
     <div>
     <div className='tech-container'  data-aos="fade-right" style={{transition:".5s"}}>
      <h1 className='tech-tittle tittle-front'>FRONTEND</h1>
           <section className='technologies' id='id-technologies'>
           
              <div className='cont-logo'data-aos="zoom-in" style={{transition:".5s"}}>
                <img className='img-logo'  src={HtmlLogo} alt="" />
                <p className='text-tech'><FormattedMessage id='id-tech1' defaultMessage='tech' /></p>
            </div>
            <div className='cont-logo'><img  className='img-logo' src={CssLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech2' defaultMessage='tech' />
             </p>
             </div>
            <div className="cont-logo" data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={JavaScriptLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech3' defaultMessage='tech' />
            </p>
            </div>
            <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={ReactLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech4' defaultMessage='tech' />
            </p>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5"}}><img className='img-logo' src={BootstrapLogo} alt="" />
                <p className='text-tech'>
                <FormattedMessage id='id-tech5' defaultMessage='tech' />
                </p>
                </div>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo' src={reduxLogo} alt="" />
                <p className='text-tech'>
                <FormattedMessage id='id-tech6' defaultMessage='tech' />
                    </p>
                    </div>
            </div>
           </section>
           </div>
      </div>
      <div>
      <div className='tech-container'  data-aos="fade-right" style={{transition:".5s"}}>
      <h1 className='tech-tittle tittle-front'>BACKEND</h1>
           <section className='technologies' id='id-technologies'>
          
              <div className='cont-logo'data-aos="zoom-in" style={{transition:".5s"}}>
                <img className='img-logo'  src={nodeLogo} alt="" />
                <p className='text-tech'><FormattedMessage id='id-tech7' defaultMessage='tech' /></p>
            </div>
            <div className='cont-logo'><img  className='img-logo' src={postgresLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech8' defaultMessage='tech' />
             </p>
             </div>
            <div className="cont-logo" data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={npmLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech9' defaultMessage='tech' />
            </p>
            </div>
            <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={sequelizeLogo} alt="" />
            <p className='text-tech'>
            <FormattedMessage id='id-tech10' defaultMessage='tech' />
            </p >
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5"}}><img className='img-logo' src={dbeaverLogo} alt="" />
                <p className='text-tech'>
                <FormattedMessage id='id-tech11' defaultMessage='tech' />
                </p>
                </div>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo' src={swaggerLogo} alt="" />
                <p className='text-tech'>
                <FormattedMessage id='id-tech12' defaultMessage='tech' />
                    </p>
                    </div>
            </div>
           </section>
           </div>
      </div>
</Slider>
<div style={{display:"flex"}}>
  <div className='slider-cont-left'> 
  <button onClick={goToPreviousSlide} className='slider-prev'><i class="fa-solid fa-angle-left"></i></button>
        </div>
 <div className='slider-cont-right'>
 <button onClick={goToNextSlide} className='slider-next'><i class="fa-solid fa-angle-right"></i></button>
 </div>
 </div>

           </>
    );
 
};

export default Technologies;