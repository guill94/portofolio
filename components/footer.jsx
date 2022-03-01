import React from 'react';
import fb from '../public/images/facebook-brands.svg';
import tw from '../public/images/twitter-brands.svg';
import insta from '../public/images/instagram-brands.svg';
import lk from '../public/images/linkedin-brands.svg';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-5">
  
      <div className="container p-4 pb-0">
        
        <section className="mb-4">
          
          <a className="btn btn-floating m-1" href="#" role="button"
            ><Image width={20} height={20} src={fb}/></a>

          
          <a className="btn btn-floating m-1" href="#" role="button">
          <Image width={20} height={20} src={tw}/>
           </a>

           <a className="btn btn-floating m-1" href="#" role="button">
          <Image width={20} height={20} src={insta}/>
           </a>

           <a className="btn btn-floating m-1" href="#" role="button">
          <Image width={20} height={20} src={lk}/>
           </a>
  
        </section>
        
      </div>
    

      
      <div className="text-center p-3" >
        © 2022 Copyright :
        <a className="text-white ms-2" href="#">Next JS</a>
      </div>
      
    </footer>
  )
}

export default Footer;