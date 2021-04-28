import style from './style.module.scss'



export default function Header(){
 
  return(
    <div className={style.header} >
    <div className={style.header__container}> 
    <img src="/logo.png" alt="logo?"/>
    <nav className={style.header__nav}>
      <ul>
        <li>Sobre</li>
        <li>Produtos</li>
        <li>Parceiros</li>
        <li>Contato</li>
      </ul>
    </nav>
    </div>
    </div>
  )
}