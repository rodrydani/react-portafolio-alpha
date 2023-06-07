import React from 'react';
import { useEffect } from 'react';
import BackImageContact from "../assets/Decoration-003.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            
        });
      }, []);
    return ( 
         <section data-aos="fade-button" style={{transition:"1.5s"}}>
        <div className='contact-page' id='id-Contact'>
            
             
            <h3 className='contact-num'><i class="fa-brands fa-square-whatsapp"></i>{" "}+54-1123134900</h3>
            <h3 className='contact-mail'><i class="fa-sharp fa-solid fa-envelope"></i>{" "}rodrydanielmir@gmail.com</h3>  
        </div>
        
         </section>
    );
};

export default Contact;