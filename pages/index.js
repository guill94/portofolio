import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import uni1 from '../public/projects_images/uni1.PNG';
import animaux1 from '../public/projects_images/animaux1.PNG';
import bsn1 from '../public/projects_images/bsn1.PNG';
import postyours1 from '../public/projects_images/postyours1.png';
import algo1 from '../public/projects_images/algo1.PNG';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Card from '../components/card';
import GitButton from '../components/buttons/git';
import WebsiteButton from '../components/buttons/website';
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
                    <Card img={bsn1} title={t ('cards.bsn', {ns: 'homepage'})} text='text' linkPage='/projects/bsn'>
                    </Card>
                  </div>

                  <div className="col-xl-4 mt-5">
                    <Card img={postyours1} title={t ('cards.postyours', {ns: 'homepage'})} text='text' linkPage='/projects/postyours'>
                      <GitButton linkGit="https://github.com/guill94/postyours"/>
                    </Card>
                  </div>

                  <div className="col-xl-4 mt-5">
                    <Card img={uni1} title={t ('cards.uni', {ns: 'homepage'})} text='text' linkPage='/projects/fiber'>
                      <WebsiteButton linkSite="http://physique.unice.fr/sem6/2016-2017/PagesWeb/PT/Fibre/index.html"/>
                    </Card>
                  </div>
                
              </div>
              
              <div className="row">

                  <div className="col-xl-6 mt-5">
                    <Card img={animaux1} title={t ('cards.animaux', {ns: 'homepage'})} text='text' linkPage='/projects/site_animaux'>
                      <WebsiteButton linkSite="https://guill94.github.io/site_animaux/"/>
                      <GitButton linkGit="https://github.com/guill94/site_animaux/"/>
                    </Card>
                  </div>

                  <div className="col-xl-6 mt-5">
                    <Card img={algo1 } title={t ('cards.algo', {ns: 'homepage'})} text='text' linkPage='/projects/algorithmes'>
                      <WebsiteButton linkSite="https://guill94.github.io/js_algo/"/>
                      <GitButton linkGit="https://github.com/guill94/js_algo"/>
                    </Card>
                  </div>
                
              </div>

              
        </section>

        <section className='mt-5 main-about text-center'>

          <div id='about'></div>

          <h1 className='text-center pt-3'>{t ('a-propos', {ns: 'homepage'})}</h1>
          <p className='container'>{t ('parcours', {ns: 'homepage'})}</p>

          <motion.a whileHover={{scale: 1.2, zIndex: 1}} target='_blank' href='/fichiers/DOSSIER_PROJET.pdf' className='custom-button'
              initial={{y: 550}}
              animate={{y: 0}}
              transition={{delay: 0.1, duration: 0.1, type: 'spring'}}
            >
              {t ('boutondp', {ns: 'homepage'})}
          </motion.a>

          <h3 className='text-center pt-5 mb-3'>{t ('outils', {ns: 'homepage'})}</h3>

          <p>HTML - CSS - JavaScript - PHP - C# - Java</p>
          <p className='pb-4'>React JS - Next JS - Vue JS - Symfony - Spring Boot</p>

        </section>

        <section className='text-center'>

          <div id='contact'></div>

          <h1 className='pt-3 pb-5'>Contact</h1>
          

          <form className='contact-form' action="https://formsubmit.co/ad535ef9390efd5f29158ba70693cce0" method="POST">

              <input type="hidden" name="_subject" value="Nouveau message Portofolio"></input>
              <input type="hidden" name="_next" value="https://guillaume-burgnies.vercel.app/thankyou"></input>
              <div className="form-group">
                <input className='form-control' type="email" name="email" placeholder="Email" required/><br/>
              </div>
              <div className="form-group">
                <input className='form-control' type="text" name="nom" placeholder={t ('name', {ns: 'homepage'})} required/><br/>
              </div>
              <div className="form-group">
                <textarea className='form-control' type="text" name="message" placeholder="Message" required/><br/>
              </div>
              <button className='custom-button' type="submit">{t ('envoyer', {ns: 'homepage'})}</button>

          </form> 
          
        </section>

        <Footer/>
    </div>
  )
}
