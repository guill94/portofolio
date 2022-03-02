import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/algo1.PNG';
import img2 from '../../public/projects_images/algo2.PNG';
import img3 from '../../public/projects_images/algo3.PNG';
import img4 from '../../public/projects_images/algo4.PNG';
import GitButton from '../../components/buttons/git';
import WebsiteButton from '../../components/buttons/website';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav', 'projects'])),
      },
    };
  }


const Algo = () => {

    const { t } = useTranslation();


  return (
    <div>
        <Projects 
            title={t ('cards.algo', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('algo', {ns: 'projects'})}
        >
            <WebsiteButton linkSite="https://guill94.github.io/js_algo/"/>
            <GitButton linkGit="https://github.com/guill94/js_algo"/>
        </Projects>
    </div>
  )
}

export default Algo;