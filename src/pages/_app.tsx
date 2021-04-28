import '../styles/global.scss';
import Header from '../components/Header';
import Watsapp from '../components/Watsapp';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
    <Watsapp/>
    <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
    </>
  ) 
}

export default MyApp
