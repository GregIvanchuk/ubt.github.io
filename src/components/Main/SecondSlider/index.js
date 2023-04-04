import styles from './SecondSlider.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
function SecondSlider() {
     // --------------------------------------------
     const slides2= [
        {src:"/images/woman1.jpg" ,    p :"Професійне керівництво цієї студії дало мені результати, що значно перевершили мої сподівання.Мої клієнти реально насолоджуються,веселою, розслабляючою атмосферою, яку створює дизайн інтер'єру." ,   name:"СВІТЛАНА АНАТОЛІЇВНА"},
        {src:"/images/man.jpg",  p :"Вашу студію мені дуже рекомендували.Чутливість,знання, бачення та кінцеве вмконання, яку ваша команда надала мені, були приголомшливими.Ремонт мого будинку не міг би бути успішним без вашої участі." ,   name:"РОМАН ПЕТРОВИЧ"},
        {src:"/images/woman2.jpg" , p :"Я обрала дизайн інтер'єру через їх чудовий діапазон дизайнерських можливостей та глибокі поради під час плануваня проекту. Їх знання, досвід та увага до деталей виявилися для мене неоціненними при створенні готового прооекту. " ,   name:"ІРИНА МИКОЛАЇВНА"},
    ];
      const [currentIndex2,setСurrentIndex2]= React.useState(0);

      // Set up automatic slide transition
      useEffect(() => {
        const intervalId = setInterval(() => {
          goToNext2();
        }, 5000); // Change the delay time as needed
        return () => clearInterval(intervalId);
      }, [currentIndex2]);
    
      const goToPrevios2 = () => {
        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToNext2 = () => {
        const isLastSlide = currentIndex2 === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToSlide2 = (slideIndex) => {
        setСurrentIndex2(slideIndex);
      };
    
      
  return (
    <>
     <div  className={styles.sliderStyles2}>
                    <div  className={styles.slideStyles2} >
                    <div  className={styles.slideItem} >
                       <img  height={100} width={100} src={slides2[currentIndex2].src}/> 
                          <p>{slides2[currentIndex2].p}</p>
                          <h4>{slides2[currentIndex2].name}</h4>
                          </div>
                        <div className={styles.leftArrowStyles2} onClick={goToPrevios2}>
                          <img height={22} width={22} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles2} onClick={goToNext2}> 
                        <img height={22} width={22} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides2.map((item,slideIndex)=><div onClick={() => goToSlide2(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                </div>
    </>
  );
}
export default SecondSlider;
