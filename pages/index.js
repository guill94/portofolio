import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import Nav from '../components/nav'
import Card from '../components/card';
import { motion } from 'framer-motion';



export default function Home() {

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
              transition={{delay: 0.5, duration: 1}}
            >
              <span>Bien</span><span>venue</span>
            </motion.h1>
            <p className="infoIndex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cntore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam labore facere</p>
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
