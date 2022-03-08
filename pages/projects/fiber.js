import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/uni1.PNG';
import img2 from '../../public/projects_images/uni2.PNG';
import img3 from '../../public/projects_images/uni3.PNG';
import img4 from '../../public/projects_images/uni4.PNG';
import GitButton from '../../components/buttons/git';
import WebsiteButton from '../../components/buttons/website';
import { Head } from 'next/head';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav', 'projects'])),
      },
    };
  }


const Fiber = () => {

    const { t } = useTranslation();


  return (
    <div>
      <Head>
        <title> 🖥 {t ('cards.uni', {ns: 'homepage'})}</title>
        <meta name="description" content="Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Projects 
            title={t ('cards.uni', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('uni', {ns: 'projects'})}
            tech="HTML - CSS - JavaScript"
        >
            <WebsiteButton linkSite="http://physique.unice.fr/sem6/2016-2017/PagesWeb/PT/Fibre/index.html"/>
            <GitButton linkGit="#"/>
        </Projects>
    </div>
  )
}

export default Fiber