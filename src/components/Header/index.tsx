import style from './style.module.scss'




export default function Header(){
 function mosrtar(){
   alert('links mudarao as paginas do site')
 }
  return(
    <div className={style.header} >
       
    <div className={style.header__container}> 
    <div className ={style.header__logo}>
      <img  src="/logo.png" alt="logo"/>
    </div>
    <div className={style.header__icon}>
      <img src="/tres-pontos.png" alt="Navegação"/>
    </div>
  
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
