import React from 'react';


const Footer = () => {
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/rodrigo-miranda-699311163/', '_blank')
    }
    return (
        <div > 
         <footer className='footer-page'>
         <div className='btn-linkedin-footer'>
            <button  onClick={handleClick} type="button" class="btn btn-outline-light"><i class="fa-brands fa-linkedin"></i></button>
            </div>
         <p>Portfolio made by Rodrigo Miranda</p>
         <p>Year: 2022</p>
         </footer>
        </div>
    );
};

export default Footer;