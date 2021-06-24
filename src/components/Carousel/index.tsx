import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './style.module.scss'


export default function Carrosel(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <Carousel responsive={responsive}>
  <div className = {style.item1}>
    <img src="/image1.jpeg" alt="" />
  </div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
    </Carousel>
  )
}