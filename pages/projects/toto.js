import React from 'react';

import img1 from '../../public/projects_images/postyours1.png';
import img2 from '../../public/projects_images/postyours2.png';
import img3 from '../../public/projects_images/postyours3.png';
import img4 from '../../public/projects_images/postyours4.png';

import Image from 'next/image';

const toto = () => {

    return (
        <div id="carouselExampleIndicators" Name="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1}/>
                    </div>
                    <div className="carousel-item">
                    <Image src={img2} layout="fill" alt="image site"/>
                    </div>
                    <div className="carousel-item">
                    <Image src={img3} layout="fill" alt="image site"/>
                    </div>
                    <div className="carousel-item">
                    <Image src={img4} layout="fill" alt="image site"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}
export default toto;