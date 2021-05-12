import '../styles/global.scss';
import Header from '../components/Header';
import Watsapp from '../components/Watsapp';


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
    <Watsapp/>
    </>
  ) 
}

export default MyApp
