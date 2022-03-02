import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import github from '../../public/images/github-brands.svg';

const Git = (props) => {
  return (
    <Link href={props.linkGit} >
        <motion.a href='' className="card-button me-1"
            whileHover={{ scale: 1.2}}
        >
            <Image width={20} height={20} src={github}/>
            <span className='ms-1'>GitHub</span>
        </motion.a>
    </Link>
  )
}

export default Git;