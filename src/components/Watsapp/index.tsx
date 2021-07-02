import style from './style.module.scss'

export default function Watspp(){
  return(
    <div className ={style.zapzap}>
    <a target='_blanc' href="https://api.whatsapp.com/send?phone=5541995180916">
      <img src="/whatsapp.png" alt="watsapp icon"/>
    </a>
    </div>
  )
}