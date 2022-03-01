import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import mail from '../public/images/envelope-solid.svg';
import phone from '../public/images/phone-solid.svg';
import Nav from '../components/nav';
import Footer from '../components/footer';
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

      <div id='home'></div>

      <Nav/>

      <div className="bgIndex">
          
            <motion.h1 
              initial={{y: -550}}
              animate={{y: 0}}
              transition={{delay: 0.2, duration: 1, type: 'spring'}}
            >
              {t ('hello', {ns: 'homepage'})}
            </motion.h1>
            <motion.p className="infoIndex"
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.7, duration: 1, type: 'spring'}}
            >
              {t ('intro', {ns: 'homepage'})}
            </motion.p>
         
            <motion.a whileHover={{scale: 1.2, zIndex: 1}} target='_blank' href='/fichiers/CV.pdf' className='custom-button'
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.1, duration: 0.1, type: 'spring'}}
            >
              {t ('boutoncv', {ns: 'homepage'})}
            </motion.a>
        </div>

        <section className='container mt-5'>

              <div id='projects'></div>

              <h1 className='text-center pt-5'>{t ('projets', {ns: 'homepage'})}</h1>

              <div className="row">

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>
                
              </div>

              <div className="row">

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>

                <div className="col-xl-4 mt-5">
                  <Card img={img1} title='title' text='text' link='#'/>
                </div>
            </div>
        </section>

        <section className='mt-5 main-about'>

          <div id='about'></div>

          <h1 className='text-center pt-3'>{t ('a-propos', {ns: 'homepage'})}</h1>
          <p>{t ('parcours', {ns: 'homepage'})}</p>

          <h3 className='text-center pt-5 mb-3'>{t ('outils', {ns: 'homepage'})}</h3>

          <p>HTML - CSS - JavaScript - PHP - C# - Java</p>
          <p className='pb-4'>React JS - Next JS - Vue JS - Symfony - Spring Boot</p>

        </section>

        <section className='text-center'>

          <div id='contact'></div>

          <h1 className='pt-3 pb-5'>Contact</h1>
          <p><Image src={mail} width={20} height={20}/> +33(0)673942166</p>
          <p><Image src={phone} width={20} height={20}/> guillaume.burgnies@hotmail.fr</p>

          <form action="https://formsubmit.co/guillaume.burgnies@hotmail.fr" method="POST">
              
              <input type="hidden" name="_subject" value="Nouveau message Portofolio"></input>
              <input type="email" name="email" placeholder="email" required/>
              <input type="text" name="message" placeholder="Message" required/>
              <button type="submit">Send</button>
          </form> 
          
        </section>

        <Footer/>
    </div>
  )
}
