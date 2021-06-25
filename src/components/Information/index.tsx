import style from './style.module.scss'

export default function Information(){
  return(
    <div className={style.contact}>
      <div className={style.title}>
      <h2 >Precisou? Ligue que vamos até você!</h2>
      </div>
      <div className={style.contact__phones}>
        <div className ={style.contact__phone}>
       <img src="/phone.png" alt="" /><h2>(41) 99518- 0916</h2>
       </div>
       <div className ={style.contact__phone}>
       <img src="/phone.png" alt="" /><h2>(41) 99587- 4121</h2>
       </div>
       <div className ={style.contact__phone}>
       <img src="/phone.png" alt="" /><h2>(41) 3473-2928</h2>
       </div>
      </div>
      <div className={style.adress}>
      <h2>R. Formosa do Oeste, 21 - Centro, Matinhos - PR</h2>
      </div>
    </div>
  )
}