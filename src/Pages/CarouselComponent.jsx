import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import dope from '../Assets/Images/PartnerImages/dope.png'
import workbright from '../Assets/Images/PartnerImages/workbright.png'
import salesforce from '../Assets/Images/PartnerImages/salesforce.png'
import rpaLabs from '../Assets/Images/PartnerImages/rpaLabs.png'
import sondermind from '../Assets/Images/PartnerImages/sondermind.png'
import energizeColorado from '../Assets/Images/PartnerImages/energizeColorado.png'

import styles from "../Stylesheets/carousel.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const partnerImages = [
  {
    key: 1,
    img: workbright
  },
  {
    key: 2,
    img: sondermind
  },
  {
    key: 3,
    img: dope
  },
  {
    key: 4,
    img: rpaLabs
  },
  {
    key: 5,
    img: salesforce
  },
  {
    key: 6,
    img: energizeColorado
  },
  {
    key: 7,
    img: dope
  }
]
const CarouselComponent = ({ deviceType }) => {
  return (
    <Carousel
      containerClass="carousel-container"
      itemClass="carousel-item"
      responsive={responsive}
      deviceType={deviceType}
    >
      {partnerImages.map(image => {
        return (
            <div className={styles["image-wrapper-styles"]}>
                <Image
                  key={image.key}
                  draggable={true}
                  style={{ width: "100%", height: "100%" }}
                  src={image.img}
                  alt={image.key}
                />
            </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
