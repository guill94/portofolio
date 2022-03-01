import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import Nav from '../components/nav';
import Card from '../components/card';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'nav'])),
    },
  };
}

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className={styles.container}>

      <Head>
        <title> 🖥 Guillaume BURGNIES</title>
        <meta name="description" content="Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <div className="bgIndex">
          
            <motion.h1 
              initial={{y: -550}}
              animate={{y: 0}}
              transition={{delay: 0.2, duration: 1}}
            >
              {t ('hello', {ns: 'homepage'})}
            </motion.h1>
            <motion.p className="infoIndex"
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.7, duration: 1}}
            >
              {t ('intro', {ns: 'homepage'})}
            </motion.p>
         
            <motion.a whileHover={{scale: 1.2, zIndex: 1}} target='_blank' href='/fichiers/CV.pdf' className='custom-button'
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.1, duration: 0.1}}
            >
              {t ('boutoncv', {ns: 'homepage'})}
            </motion.a>
        </div>

        <div className='container mt-5'>
          <div id='projects'></div>
          <div className="row mt-3">

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>
          </div>

          <div className="row mt-5">

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>
          </div>
          
        </div>
    </div>
  )
}
