import style from './style.module.scss'

export default function Watspp(){
  return(
    <div className ={style.zapzap}>
    <a target='_blanc' href="https://api.whatsapp.com/send?phone=5541999330423&text=Atendimento%20de%20segunda%20a%20s%C3%A1bado%20das%2008%3A00%20%C3%A1s%2018%3A00">
      <img src="/whatsapp.png" alt=""/>
    </a>
    </div>
  )
}