import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header';
import Watsapp from '../components/Watsapp';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Embalados</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Watsapp/>
    </>
  ) 
}

export default MyApp
