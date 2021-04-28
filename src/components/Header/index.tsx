import style from './style.module.scss'




export default function Header(){
 function mosrtar(){
   alert('links mudarao as paginas do site')
 }
  return(
    <div className={style.header} >
       <img className={style.header__icon} src="/tres-pontos.png" alt=""/>
    <div className={style.header__container}> 
    <img src="/logo.png" alt="logo?"/>

  
    <nav className={style.header__nav}>
      
      <ul>
        <li onClick ={mosrtar}>Sobre</li>
        <li>Produtos</li>
        <li>Parceiros</li>
        <li>Contato</li>
      </ul>
    </nav>
    </div>
    </div>
  )
}