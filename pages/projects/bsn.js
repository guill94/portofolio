import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/bsn1.PNG';
import img2 from '../../public/projects_images/bsn2.PNG';
import img3 from '../../public/projects_images/bsn3.PNG';
import img4 from '../../public/projects_images/bsn4.PNG';
import { motion } from 'framer-motion';
import { Head } from 'next/head';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav', 'projects'])),
      },
    };
  }


const Bsn = () => {

    const { t } = useTranslation();


  return (
    <div>
        <Head>
          <title> 🖥 {t ('cards.bsn', {ns: 'homepage'})}</title>
          <meta name="description" content="Portofolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Projects 
            title={t ('cards.bsn', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('bsn', {ns: 'projects'})}
            tech="React JS - Symfony"
        >
          <motion.a whileHover={{scale: 1.2, zIndex: 1}} target='_blank' href='/fichiers/DOSSIER_PROJET.pdf' className='card-button'
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.1, duration: 0.1, type: 'spring'}}
            >
              {t ('boutondp', {ns: 'homepage'})}
          </motion.a>
        </Projects>
    </div>
  )
}

export default Bsn;