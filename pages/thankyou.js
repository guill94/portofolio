import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['homepage'])),
      },
    };
  }


const Thankyou = () => {

    const { t } = useTranslation();


  return (
      
    <div className='mt-5 text-center'>
        <Head>
            <title>Thank you!</title>
            <meta name="description" content="Portofolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>
            {t ('merci', {ns: 'homepage'})}
        </h1>
        <a href="/" className='custom-button mt-5'>{t ('retour', {ns: 'homepage'})}</a>
    </div>
  )
}

export default Thankyou;