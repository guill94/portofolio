import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const card = (props) => {
  return (
        <motion.div className="card" whileHover={{scale: 1.1, zIndex: 1}}>
            <Image src={props.img} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link href={props.link}>
                  <motion.a className="btn btn-primary"
                    whileHover={{ scale: 1.2}}
                  >
                    {props.button}
                  </motion.a>
                </Link>
            </div>
        </motion.div>
  )
}

export default card