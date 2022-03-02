import React from 'react';
import Nav from './nav';
import Footer from './footer';
import img1 from '../public/projects_images/uni1.PNG';
import img2 from '../public/projects_images/uni2.PNG';
import img3 from '../public/projects_images/uni3.PNG';
import img4 from '../public/projects_images/uni4.PNG';
import Image from 'next/image';

const Projects = () => {
  return (
    <div>
        <Nav/>
                <div className="main-carousel">

                    <section id="slider">

                    <input type="radio" name="slider" id="s1" defaultChecked/>
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    <input type="radio" name="slider" id="s4" />

                    <label htmlFor="s1" id="slide1">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                            <Image src={img2} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                            <Image src={img3} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    <label htmlFor="s4" id="slide4">
                            <Image src={img4} layout="fill"/>
                            <div className="carousel-caption">
                                    
                            </div>
                    </label>
                    
                    
                    </section>
                    
                </div>



        <Footer/>
    </div>
  )
}

export default Projects