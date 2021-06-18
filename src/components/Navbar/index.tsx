import style from "./style.module.scss"
import Router from 'next/router';

export default function Navbar(){
    return(
    <nav className={style.header__nav }>
        <ul>
           <li onClick={() => Router.push('/')}>Sobre</li>
           <li onClick={() => Router.push('/_partners')}>Parceiros</li>
           <li onClick={() => Router.push('/_contact')}>Contato</li>
        </ul>
    </nav>
    )
}