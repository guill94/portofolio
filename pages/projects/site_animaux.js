import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/animaux1.PNG';
import img2 from '../../public/projects_images/animaux2.PNG';
import img3 from '../../public/projects_images/animaux3.PNG';
import img4 from '../../public/projects_images/animaux4.PNG';
import GitButton from '../../components/buttons/git';
import WebsiteButton from '../../components/buttons/website';
import Head  from 'next/head';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav', 'projects'])),
      },
    };
  }


const Animaux = () => {

    const { t } = useTranslation();


  return (
    <div>
        <Head>
          <title> 🖥 {t ('cards.animaux', {ns: 'homepage'})}</title>
          <meta name="description" content="Portofolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Projects 
            title={t ('cards.animaux', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('animaux', {ns: 'projects'})}
            tech="HTML - CSS - JavaScript"
        >
            <WebsiteButton linkSite="https://guill94.github.io/site_animaux/"/>
            <GitButton linkGit="https://github.com/guill94/site_animaux"/>
        </Projects>
    </div>
  )
}

export default Animaux