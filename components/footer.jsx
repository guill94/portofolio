import React from 'react';
import github from '../public/images/github-brands.svg';
import insta from '../public/images/instagram-brands.svg';
import lk from '../public/images/linkedin-brands.svg';
import Image from 'next/image';


const Footer = () => {

  var date = new Date();

  return (
    <footer className="bg-dark text-center text-white mt-5">
  
      <div className="container p-4 pb-0">
        
        <section className="mb-4">

           <a className="btn btn-floating m-1" href="https://github.com/guill94" target="_blank" rel="noreferrer" role="button">
          <Image width={20} height={20} src={github} alt="GitHub"/>
           </a>

           <a className="btn btn-floating m-1" href="https://www.linkedin.com/in/guillaume-burgnies-00bb9b1b5/" target="_blank" rel="noreferrer" role="button">
          <Image width={20} height={20} src={lk} alt="Linkedin"/>
           </a>
  
        </section>
        
      </div>
    

      
      <div className="text-center p-3" >
        © 2021 - {date.getFullYear()}
        <p className="text-white ms-2">Made by Guillaume BURGNIES with Next JS</p>
      </div>
      
    </footer>
  )
}

export default Footer;