import React from 'react';
import BackImageContact from "../assets/Decoration-003.png"
const Contact = () => {
    return ( 
         <section>
        <div className='contact-page' id='id-Contact'>
          
              <img className='BackImageContact' src={BackImageContact} alt="" />
            <h3 className='contact-num'><i class="fa-brands fa-square-whatsapp"></i>{" "}+54-1123134900</h3>
            <h3 className='contact-mail'><i class="fa-sharp fa-solid fa-envelope"></i>{" "}rodrydanielmir@gmail.com</h3>  
           
            
           
        </div>
        
         </section>
    );
};

export default Contact;