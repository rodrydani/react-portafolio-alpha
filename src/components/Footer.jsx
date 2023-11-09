import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        AOS.init({
            offset: 10, 
            easing: 'ease-in-out', 
          });
      }, []);
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/rodrigo-miranda-699311163/', '_blank')
    }
    return (
        <div data-aos="fade-button" style={{transition:"1.5s"}}> 
         <footer className='footer-page'>
         <div className='btn-linkedin-footer'>
            <button  onClick={handleClick} type="button" class="btn btn-info"><i class="fa-brands fa-linkedin"></i></button>
            </div>
         <p>Portfolio made by Rodrigo Miranda</p>
         <p>Year: 2022 - 2023</p>
         </footer>
        </div>
    );
};

export default Footer;