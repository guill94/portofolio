import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Website = (props) => {

    const { t } = useTranslation();


  return (
    <motion.a href={props.linkSite} className="card-button me-1" target='_blank'
        whileHover={{ scale: 1.2}}
    >
        <span className='ms-1'>🖥 {t ('voir-site', {ns: 'homepage'})}</span>
    </motion.a>
  )
}

export default Website;