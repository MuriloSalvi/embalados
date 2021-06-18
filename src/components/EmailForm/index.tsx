import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss'

export default function EmailForm(){
    return(
        <div className ={style.container}>

            <h1>Orçamentos por email:</h1>
        <form name="contact" method="POST" data-netlify="true">
            <p>
                <input type="text" id='name' name='name' placeholder='Seu nome ou sua empresa'/>
            </p>
            <p>
                <input type="email" name='email' placeholder='Seu email'/>
            </p>
            <p>
                <input type="text" name ='message' id ='message' placeholder='Sua Mensagem'/>
            </p>
            <button type='submit'>enviar</button>
        </form>
        <a href="">
        <p className={style.icon}>
        <h2>Também por Whatsapp</h2> <FontAwesomeIcon icon={faWhatsapp} className={style.watsapp}/>
        </p>
        </a>
        </div>
    )
}