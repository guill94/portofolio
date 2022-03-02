import React from 'react';
import Projects from '../../components/Projects';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage', 'nav'])),
      },
    };
  }


const fiber = () => {

    const { t } = useTranslation();


  return (
    <div>
        <Projects/>
    </div>
  )
}

export default fiber