import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import github from '../public/images/github-brands.svg';
import { useTranslation } from 'next-i18next';

const card = (props) => {
  return (
        <Link href={props.linkPage}>
        <a className="card-link">
        <motion.div className="card" whileHover={{scale: 1.23, zIndex: 1}}>
            <Image src={props.img} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link href={props.linkGit}>
                  <motion.a className="card-button"
                    whileHover={{ scale: 1.2}}
                  >
                    <Image width={20} height={20} src={github}/>
                    <span className='ms-1'>GitHub</span>
                  </motion.a>
                </Link>
            </div>
        </motion.div>
        </a>
        </Link>
  )
}

export default card