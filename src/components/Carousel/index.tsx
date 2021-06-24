import "react-multi-carousel/lib/styles.css";
import style from './style.module.scss'


export default function Carrosel(){
  return(
    <div>
  <div className = {style.item1}>
    <img src="/image1.png" alt="" />
  </div>
  <div className = {style.title}>
  <h3 >Siga-nos nas redes sociais!</h3>
  </div>
  <div className={style.social}>
    <a href="https://www.instagram.com/embalados_distribuidora/" target='_blanc'>
      <img src="/insta.png" alt="" />
    </a>
    <a href="https://www.facebook.com/embaladosdistribuidoramatinhos/" target='_blanc'>
      <img src="/facebook.png" alt="" />
    </a>
  </div>
    </div>
  )
}