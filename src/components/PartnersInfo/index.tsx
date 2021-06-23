import { PartnersData } from './PartnersData'
import style from './style.module.scss';

 const PartnersInfo = ()=>{
   return(
    <section className={style.partners}>
      <h1>Parceiros</h1>
    <div className={style.partners__cards}>
      {PartnersData.map((partners )=>{
      return (
      <div className = {style.partners__card}>
      <a href={partners.site} target='_blanc'>
      <img src={partners.img} alt ='teste'/>
      </a>
      <h2>{partners.name}</h2>
      
      
      </div>
      )
      })}
    </div>
    </section>
   )
 }

 export default PartnersInfo;