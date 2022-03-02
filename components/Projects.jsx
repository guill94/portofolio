import React from 'react';
import Nav from './nav';
import Footer from './footer';
import img1 from '../public/images/img1.jpg';
import Image from 'next/image';
import Link from 'next/link';

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
                    <input type="radio" name="slider" id="s5" />
                    <input type="radio" name="slider" id="s6" />

                    <label htmlFor="s1" id="slide1">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href="/formation1"><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href="/formation2"><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href="/formation3"><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    <label htmlFor="s4" id="slide4">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href="/formation4"><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    <label htmlFor="s5" id="slide5">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href=""><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    <label htmlFor="s6" id="slide6">
                            <Image src={img1} layout="fill"/>
                            <div className="carousel-caption">
                                    <Link href=""><a>Cliquez ici</a></Link>
                            </div>
                    </label>
                    
                    </section>
                    
                </div>



        <Footer/>
    </div>
  )
}

export default Projects