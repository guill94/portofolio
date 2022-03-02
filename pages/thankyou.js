import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';


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
        <h1 className='mb-5'>
            {t ('merci', {ns: 'homepage'})}
        </h1>
        <Link href="/"><a className='custom-button'>{t ('retour', {ns: 'homepage'})}</a></Link>
    </div>
  )
}

export default Thankyou;