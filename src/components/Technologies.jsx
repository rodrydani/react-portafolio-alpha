import React from 'react';
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import JavaScriptLogo from "../assets/js.png";
import ReactLogo from "../assets/reactjs.png";
import BootstrapLogo from "../assets/bootstrap.png";
import reduxLogo from "../assets/redux.png"

const Technologies = () => {
    return (
        <div className='tech.container'>
          <h1 className='tech-tittle'>TECNOLOGIAS APRENDIDAS:</h1>
           <section className='technologies' id='id-technologies'>
          
              <div className='cont-logo'>
                <img className='img-logo'  src={HtmlLogo} alt="" />
                <p>HTML: Lenguaje de etiquetas de hipertexto</p>
            </div>
            <div className='cont-logo'><img  className='img-logo' src={CssLogo} alt="" />
            <p>
                Css: Hojas de Estilo en Cascada
             </p>
             </div>
            <div className="cont-logo"><img className='img-logo'  src={JavaScriptLogo} alt="" />
            <p>
                JavaScript: Lenguaje de programacion
            </p>
            </div>
            <div className='cont-logo'><img className='img-logo'  src={ReactLogo} alt="" />
            <p>
            React: biblioteca Javascript de código abierto
            </p>
            </div>
            <div>
                <div className='cont-logo'><img className='img-logo' src={BootstrapLogo} alt="" />
                <p>
                    Bootstrap: Biblioteca multiplataforma
                </p>
                </div>
            </div>
            <div>
                <div className='cont-logo'><img className='img-logo' src={reduxLogo} alt="" />
                <p>
                Redux: librería JavaScript. para el manejo del estado de las aplicaciones
                    </p>
                    </div>
            </div>
           </section>
           </div>
     
    );
};

export default Technologies;