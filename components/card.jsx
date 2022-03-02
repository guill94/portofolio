import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import github from '../public/images/github-brands.svg';
import { useTranslation } from 'next-i18next';

const Card = (props) => {

  const { t } = useTranslation();

  return (
       
        <div className="card-link">
          <motion.div className="card" whileHover={{scale: 1.23, zIndex: 1}}>
            <Link href={props.linkPage}>
              <a>
                <Image src={props.img} className="card-img-top" alt={props.alt}/>
              </a>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>

                <div className='text-center'>
                  
                  {props.children}

                  <Link href={props.linkPage}>
                    <motion.a href='' className="card-button me-1"
                        whileHover={{ scale: 1.2}}
                    >
                        <span className='ms-1'>{t ('voir-plus', {ns: 'homepage'})}</span>
                    </motion.a>
                  </Link>
                </div>

            </div>

          </motion.div>
        
        </div>
  )
}

export default Card