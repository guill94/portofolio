import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import github from '../public/images/github-brands.svg';
import { useTranslation } from 'next-i18next';

const Projects = (props) => {

    const { t } = useTranslation();


  return (
    <div>
        <Nav/>

            <div>
                <h1 className='text-center mt-4 mb-5'>{props.title}</h1>
            </div>

            <div className="main-carousel">

                <section id="slider">

                    <input type="radio" name="slider" id="s1" defaultChecked/>
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    <input type="radio" name="slider" id="s4" />

                    <label htmlFor="s1" id="slide1">
                            <Image src={props.img1} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                            <Image src={props.img2} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                            <Image src={props.img3} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s4" id="slide4">
                            <Image src={props.img4} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                
                </section>
                
            </div>

            <section className='mt-5 container'>
                <p>{props.main}</p>
            </section>

            <section className='text-center'>
                {props.children}
            </section>

            <section className='text-center mt-5'>
                <a href="/#projects" className='custom-button'>{t ('retour', {ns: 'homepage'})}</a>
            </section>

        <Footer/>
    </div>
  )
}

export default Projects