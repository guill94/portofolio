import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import img1 from '../../public/projects_images/postyours1.png';
import img2 from '../../public/projects_images/postyours2.png';
import img3 from '../../public/projects_images/postyours3.png';
import img4 from '../../public/projects_images/postyours4.png';
import GitButton from '../../components/buttons/git';
import WebsiteButton from '../../components/buttons/website';


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
            title={t ('cards.uni', {ns: 'homepage'})}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            main={t ('uni', {ns: 'projects'})}
        >
            <WebsiteButton linkSite="#"/>
            <GitButton linkGit="https://github.com/guill94/postyours"/>
        </Projects>
    </div>
  )
}

export default Postyours;