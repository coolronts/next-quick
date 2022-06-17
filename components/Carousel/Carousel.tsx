import {useEffect, useState}  from "react";

import Image from "next/image";
import styles from './Carousel.module.css';

type image = {
  src: string;
  alt?: string;
}
interface props {
  images: image[];
  autoplay?: boolean;
  autoplaySpeed?: number;
}
const Carousel: React.FC<props> = ({ images, autoplay, autoplaySpeed }) => {
 const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = images.map((img, index) => (
      <div className={styles.CarouselSlide} key={index} style={{opacity: currentSlide === index ? 1 : 0}}>
        <div className={styles.container}>
          <Image src={img.src} alt={img.alt}/>
        </div>
      </div>
  ));

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(function () {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, currentSlide, images]);

    return (
      <>
        <div className={styles.carouselWrapper} >
          <div className={styles.carouselSlides} style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
            {activeSlide}
          </div>
          <div className={styles.carouselControls}>
            {images.map((img, index) => (
              <div key={index} className={styles.carouselControl} onClick={() => setCurrentSlide(index)}
                style={{
                  backgroundColor: currentSlide === index ? 'lightgray' : '#ffffff',
                  border: currentSlide === index ? '1px solid lightgray' : '1px solid #ffffff',
                  boxShadow: currentSlide === index ? '0px 0px 10px lightgray' : '0'
                }}
              />
            ))}
          </div>
        </div>
      </>
  );
};

export default Carousel;


