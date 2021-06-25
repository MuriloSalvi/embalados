import style from './style.module.scss'
const ProductsInfo =()=>{
  return(
    <div className={style.products}>
      <div className = {style.products__packing}>
        <img src="/packing.png" alt="" />
        <h2> Embalagens e descartáveis</h2>
      </div>
      <div className = {style.products__cleaning}>
        <img src="/icone-limpeza.png" alt="" />
        <h2>Limpeza profissional</h2>
      </div>
    </div>
  )
}

export default ProductsInfo