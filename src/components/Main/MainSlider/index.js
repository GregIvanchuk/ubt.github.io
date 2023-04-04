import styles from './MainSlider.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
function MainSlider() {
      // ---------------------------------------------
      const slides= [
        {src:"/images/slide1.jpg"  ,title:"СТВОРЕННЯ ІНДИВІДУАЛЬНИХ ІНТЕР'ЄРІВ" ,p:"МИ ПРОЕКТУЄМО ДИВОВИЖНІ ІНТЕР'ЄРИ"},
        {src:"/images/slide2.jpg"  ,title:"ПЕРСОЛІЗОВАНІ ІНТЕР'ЄРИ " ,p:"НАША КОМАНДА МОЖЕ ПЕРСОНАЛІЗУВАТИ ІСНУЮЧИЙ ІНТЕР'ЄР"},
        {src:"/images/slide3.jpg"  ,title:"ВСІ ВИДИ ДИЗАЙНУ ІНТЕР'ЄРУ" ,p:"МИ ВПОРАЄМОСЯ З БУДЬ-ЯКИМИ ПОСТАВЛЕНИМИ ЗАВДАННЯМИ"},
      ];
        const [currentIndex, setcurrentIndex] = useState(0);
        useEffect(() => {
          const intervalId = setInterval(() => {
            goToNext();
          }, 3000);
          return () => clearInterval(intervalId);
      }, [currentIndex]);
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
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
            <div  className={styles.sliderStyles}>
                    <div  className={styles.slideStyles} >
                          <img width={3000} height={600}  src={slides[currentIndex].src}/> 
                          <div  className={styles.innerSl} >
                           <h1>{slides[currentIndex].title}</h1>
                           <h3>{slides[currentIndex].p}</h3>
                           <button>Передзвоніть мені</button>
                           </div>
                        <div className={styles.leftArrowStyles} onClick={goToPrevios}>
                          <img height={22} width={22} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles} onClick={goToNext}> 
                        <img height={22} width={22} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides.map((item,slideIndex)=><div onClick={() => goToSlide(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                </div>
    </>
  );
}

export default MainSlider;
