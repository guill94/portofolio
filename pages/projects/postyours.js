import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/postyours1.png';
import img2 from '../../public/projects_images/postyours2.png';
import img3 from '../../public/projects_images/postyours3.png';
import img4 from '../../public/projects_images/postyours4.png';
import GitButton from '../../components/buttons/git';
import { motion } from 'framer-motion';



export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav', 'projects'])),
      },
    };
  }


const Postyours = () => {

    const { t } = useTranslation();


  return (
    <div>
        <Projects 
            title={t ('cards.postyours', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('postyours', {ns: 'projects'})}
            tech="Twig - Symfony"
        >
            <GitButton linkGit="https://github.com/guill94/postyours"/>
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

export default Postyours;