import style from './style.module.scss'

export default function Gmap(){
  return(
    <div className = {style.map}>
      <iframe width="100%" height="454" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=100%&amp;height=454&amp;hl=en&amp;q=R.%20Formosa%20do%20Oeste%201030%20Matinhos+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.pt/pt/info/covid-19#info'>SARS-CoV-2</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=98b1872f1d87ef0345a281613b68ff941185c067'></script>
    </div>
  )
}