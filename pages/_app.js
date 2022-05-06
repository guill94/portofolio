import Head from "next/head";
import '../styles/globals.css';
import '../styles/mobile.css';
import 'bootstrap/dist/css/bootstrap.css';
import Script from "next/script";
import { appWithTranslation } from 'next-i18next';




function MyApp({ Component, pageProps }) {

  return (
    <> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>
      <Script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>


    </>
  )
}

export default appWithTranslation(MyApp);
