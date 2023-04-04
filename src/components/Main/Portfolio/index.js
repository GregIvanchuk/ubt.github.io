import styles from './Portfolio.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
function Portfolio() {
      // ---------------------------------------------
      const slides= [
        {src:"/images/slide1.jpg"  },
        {src:"/images/slide2.jpg"  },
        {src:"/images/slide3.jpg" },
      ];
        const [currentIndex, setcurrentIndex] = useState(0);
      //   useEffect(() => {
      //     const intervalId = setInterval(() => {
      //       goToNext();
      //     }, 3000);
      //     return () => clearInterval(intervalId);
      // }, [currentIndex]);
        const goToPrevios = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          setcurrentIndex(newIndex);
        };
        const goToNext = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setcurrentIndex(newIndex);  
          // Додатковий умовний оператор для переходу на перший слайд
          if (newIndex === 0) {
            setcurrentIndex(newIndex);
          }
        };
        const goToSlide = (slideIndex) => {
         setcurrentIndex(slideIndex);
       };
  return (
    <>     
            <div  className={styles.sliderStyles}>
            <h1>СПАЛЬНІ</h1>
                    <div  className={styles.slideStyles} >
                          <img width={1400} height={500}  src={slides[currentIndex].src}/> 
            
                        <div className={styles.leftArrowStyles} onClick={goToPrevios}>
                          <img height={32} width={32} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles} onClick={goToNext}> 
                        <img height={32} width={32} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides.map((item,slideIndex)=><img src={item.src} width={200} height={100} onClick={() => goToSlide(slideIndex)} 
               className={`${styles.dots} ${currentIndex === slideIndex ? styles.activeDot : ''}`}  key={slideIndex}/>)}
                    </div>
                </div>
    </>
  );
}

export default Portfolio;
