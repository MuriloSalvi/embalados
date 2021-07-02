import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss'

export default function EmailForm(){
    return(
        <div className ={style.container}>

            <h1>Orçamentos por email:</h1>
        <form className={style.form} name="contact" method="POST" data-netlify="true">
            <h3>embaladosdistribuidora@gmail.com</h3>
        </form>
        <a href="https://api.whatsapp.com/send?phone=5541995180916" target='_blanc'>
        <p className={style.icon}>
        <h2>Também por Whatsapp</h2> <FontAwesomeIcon icon={faWhatsapp} className={style.watsapp}/>
        </p>
        </a>
        </div>
    )
}