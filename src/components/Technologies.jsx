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
import Carousel from 'react-bootstrap/Carousel';

const Technologies = () => {

    useEffect(() => {
        AOS.init();
      }, []);

      
    return (
        <>
   <h1 className='tech-tittle'>TECNOLOGIAS APRENDIDAS:</h1>
 <Carousel >
      <Carousel.Item className='carousel' data-interval="false">
      <div className='tech-container'  data-aos="fade-right" style={{transition:".5s"}}>
      <h1 className='tech-tittle tittle-front'>FRONTEND</h1>
           <section className='technologies' id='id-technologies'>
           
              <div className='cont-logo'data-aos="zoom-in" style={{transition:".5s"}}>
                <img className='img-logo'  src={HtmlLogo} alt="" />
                <p>HTML: Lenguaje de etiquetas de hipertexto</p>
            </div>
            <div className='cont-logo'><img  className='img-logo' src={CssLogo} alt="" />
            <p>
                Css: Hojas de Estilo en Cascada
             </p>
             </div>
            <div className="cont-logo" data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={JavaScriptLogo} alt="" />
            <p>
                JavaScript: Lenguaje de programacion
            </p>
            </div>
            <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={ReactLogo} alt="" />
            <p>
            React: biblioteca Javascript de c??digo abierto
            </p>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5"}}><img className='img-logo' src={BootstrapLogo} alt="" />
                <p>
                    Bootstrap: Biblioteca multiplataforma
                </p>
                </div>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo' src={reduxLogo} alt="" />
                <p>
                Redux: librer??a JavaScript. para el manejo del estado de las aplicaciones
                    </p>
                    </div>
            </div>
           </section>
           </div>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel'>
      <div className='tech-container'  data-aos="fade-right" style={{transition:".5s"}}>
      <h1 className='tech-tittle tittle-front'>BACKEND</h1>
           <section className='technologies' id='id-technologies'>
          
              <div className='cont-logo'data-aos="zoom-in" style={{transition:".5s"}}>
                <img className='img-logo'  src={nodeLogo} alt="" />
                <p>Node. js: es un entorno de ejecuci??n JavaScript de c??digo abierto y multiplataforma que se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red</p>
            </div>
            <div className='cont-logo'><img  className='img-logo' src={postgresLogo} alt="" />
            <p>
               PostgreSQL: es un sistema de gesti??n de bases de datos
             </p>
             </div>
            <div className="cont-logo" data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={npmLogo} alt="" />
            <p>
                npm: es el sistema de gesti??n de paquetes por defecto para Node.js
            </p>
            </div>
            <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo'  src={sequelizeLogo} alt="" />
            <p>
            sequelize: es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla
            </p>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5"}}><img className='img-logo' src={dbeaverLogo} alt="" />
                <p>
                    DBeaver: es una herramienta de administraci??n de bases de datos.
                </p>
                </div>
            </div>
            <div>
                <div className='cont-logo' data-aos="zoom-in" style={{transition:".5s"}}><img className='img-logo' src={swaggerLogo} alt="" />
                <p>
               Swagger: Swagger es un conjunto de herramientas de software de c??digo abierto para dise??ar, construir, documentar, y utilizar servicios web RESTful.
                    </p>
                    </div>
            </div>
           </section>
           </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>


       
           </>
    );
};

export default Technologies;