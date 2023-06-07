import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfgbqnu', 'template_zto9ulh', form.current, 'je2a4Of5MPFnbOofJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); }
      const showAlert =()=>{
        Swal.fire({
            title:"success",
            text: "the operation was completed successfully",
            icon: "success",
          });}
 

  return (
   <div>
    <form ref={form} onSubmit={sendEmail} style={{position:"relative",zIndex:"100"}} className='field'>
      <label><FormattedMessage id='id-form3' defaultMessage='form' /></label>
      <input type="text" name="user_name" />
      <label><FormattedMessage id='id-form4' defaultMessage='form' /></label>
      <input type="email" name="user_email" />
      <label><FormattedMessage id='id-form5' defaultMessage='form' /></label>
      <textarea name="message" />
      <input type="submit" value="Send" onClick={showAlert} />
    
    </form>
    </div>
  );
};

export default Formulario;