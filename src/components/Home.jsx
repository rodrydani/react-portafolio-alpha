import React from 'react';
import ImgBack from "../assets/imagenbackcf.png"
import ImgMe from "../assets/imagen-Perfil.png"
import ImgDecoration from "../assets/decoration-001.png"
import curriculumMio from "../assets/Curriculum-academlo.pdf"

const Home = () => {
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/rodrigo-miranda-699311163/', '_blank')
    }

    const githandleClick =()=>{
        window.open('https://github.com/rodrydani/', '_blank')
    }

    return ( 
    <section>
        <div>
        <h1 className='welcome-hi'>Hola! soy Rodrigo</h1>
            <div className='image-present' id='id-Home'>
          
            <img  className='Img-Back' src={ImgBack} alt="" />
            <img className='img-Me'  src={ImgMe} alt="" />
            <div className='text-present'>
            <h3 className='present-tittle'>Bienvenido a mi pagina!</h3>
            <p className='present-tittle'>Mi nombre es Rodrigo Miranda. Soy oriundo de Argentina, Buenos Aires.</p>
            <p className='present-tittle'>Tengo 30 años y alrededor de 1 año programando.</p>
            
             <p className='present-tittle'><b>Estoy seguro se que hariamos un buen equipo!</b></p>
            </div>
            <img className='Img-Decoration' src={ImgDecoration} alt="" />
          
            </div>
            
        
        </div>
        <div className='btn-link-home'>
            <button onClick={handleClick} type="button" class="btn btn-outline-info"><i class="fa-brands fa-linkedin"></i></button>
            <button onClick={githandleClick} type="button" class="btn btn-outline-primary"><i class="fa-brands fa-github"></i></button>
            <button type="button" class="btn btn-outline-danger"> <a href={curriculumMio} target="_blank"><i class="fa-solid fa-file-pdf"></i></a></button>
           </div>
        </section>
    );
};

export default Home;