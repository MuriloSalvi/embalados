import style from './style.module.scss'
import {useState} from 'react'
import Navbar from '../Navbar'

export default function Header(){
const [open, setOpen] = useState(false);
 
  return(
    <div className={style.header} >
       
    <div className={style.header__container}> 
    <div className ={style.header__logo}>
      <img  src="/logo.png" alt="logo"/>
    </div>
    <div className={style.header__icon} onClick={()=> setOpen(!open)}>
      <img src="/tres-pontos.png" alt="Navegação"/>
    </div>
  
  {open &&
   <Navbar />
    }
    
   
    </div>
    </div>
  )
}
