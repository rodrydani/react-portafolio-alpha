import React from 'react';
import reactEcommerce from "../assets/reactEcommerce-page.png";
import pokeDexPage from "../assets/pokedex-page.png";
import userPage from "../assets/users-page.png";
import RyMpage from "../assets/RyM-page.png";
import phrasePage from "../assets/phrase-page.png";
import ecommerce from "../assets/e-commerce.png"
const Proyects = () => {
    return (
      <>
      <br />
      <h1 className='project-tittle'>Proyectos</h1>
      <br />
            <section className='Proyects' id='id-Proyects'>
                  <div className='proyect-card'>
                     <a href="https://coruscating-alfajores-f77dfe.netlify.app/#/" target="_blank">
                        <img className='react-Ecommerce' src={reactEcommerce} alt="" />
                    </a>
                  </div>
                  <div className='proyect-card'>
                     <a href="https://deft-zuccutto-b00fa6.netlify.app/" target="_blank">
                        <img className='pokeDex-page' src={pokeDexPage} alt="" />
                    </a>
                  </div>
                  <div className='proyect-card'>
                     <a href="https://transcendent-crumble-ab19b3.netlify.app/" target="_blank">
                        <img className='pokeDex-page' src={userPage} alt="" />
                    </a>
                  </div>

                  <div className='proyect-card'>
                     <a href="https://timely-licorice-a0b5b7.netlify.app/" target="_blank">
                        <img className='pokeDex-page' src={RyMpage} alt="" />
                    </a>
                  </div>
                  <div className='proyect-card'>
                     <a href="https://strong-otter-455114.netlify.app/" target="_blank">
                        <img className='pokeDex-page' src={phrasePage} alt="" />
                    </a>
                  </div>
                  <div className='proyect-card'>
                     <a href="https://jade-sunshine-189d37.netlify.app/" target="_blank">
                        <img className='pokeDex-page' src={ecommerce} alt="" />
                    </a>
                  </div>
            </section>
            </>
    );
};

export default Proyects;