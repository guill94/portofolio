import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const card = (props) => {
  return (
        <div className="card">
            <Image src={props.img} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link href={props.link}><a className="btn btn-primary">{props.button}</a></Link>
            </div>
        </div>
  )
}

export default card