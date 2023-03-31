import styles from './App.module.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
function App() {
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
        }, []);
      
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
    
      const slides2= [
        {src:"/images/woman1.jpg" ,    p :"Професійне керівництво цієї студії дало мені результати, що значно перевершили мої сподівання.Мої клієнти реально насолоджуються,веселою, розслабляючою атмосферою, яку створює дизайн інтер'єру." ,   name:"СВІТЛАНА АНАТОЛІЇВНА"},
        {src:"/images/man.jpg",  p :"Вашу студію мені дуже рекомендували.Чутливість,знання, бачення та кінцеве вмконання, яку ваша команда надала мені, були приголомшливими.Ремонт мого будинку не міг би бути успішним без вашої участі." ,   name:"РОМАН ПЕТРОВИЧ"},
        {src:"/images/woman2.jpg" , p :"Я обрала дизайн інтер'єру через їх чудовий діапазон дизайнерських можливостей та глибокі поради під час плануваня проекту. Їх знання, досвід та увага до деталей виявилися для мене неоціненними при створенні готового прооекту. " ,   name:"ІРИНА МИКОЛАЇВНА"},
    ];
      const [currentIndex2,setcurrentIndex2]= React.useState(0);
    const goToPrevios2 = () =>{
      const  isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setcurrentIndex(newIndex);
    }
    const goToNext2 = () =>{
        const  isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setcurrentIndex(newIndex);
    }
    const goToSlide2 = (slideIndex) => {
        setcurrentIndex(slideIndex);
    }
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header/>
        <main><div  className={styles.sliderStyles}>
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
                <div className={styles.yellowBlock}>
                  <h1>ЗРУЧНІ ТА ДОСТУПНІ ПРОЕКТИ ДИЗАЙНУ ІНТЕР’ЄРУ</h1>
                  <button className={styles.detail}>Детальніше</button>
                  </div>
                  <div className={styles.ourServices}>
                    <h1>НАШІ ПОСЛУГИ</h1>
                    <div className={styles.services}>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i1.png" alt="" />
                          <h3>ДИЗАЙН ІНТЕР'ЄРУ</h3>
                        </div>
                        <p>Ми розробляємо та впроваджуємо для вас найкращі концепції дизайну інтер’єру, щоб ви та всі ваші гості змогли насолодитися неповторною атмосферою вашого будинку.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i2.png" alt="" />
                          <h3>ПЛАНУВАННЯ ПРОСТОРУ</h3>
                        </div>
                        <p>Ми створюємо кращі інтер’єри завдяки плануванню простору - надзвичайно важливо для успішного дизайну інтер'єру вашого будинку чи офісу.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i3.png" alt="" />
                          <h3>КОНСУЛЬТАЦІЇ</h3>
                        </div>
                        <p>Ми готові проконсультувати вас з будь-якого питання, що стосується дизайну інтер’єру. Зателефонуйте і ми організуємо безкоштовну консультацію.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i4.png" alt="" />
                          <h3>ДИЗАЙН ФЕН-ШУЙ</h3>
                        </div>
                        <p>Маючи багаторічний досвід, ми зможемо допомогти вам спроектувати ваш інтер’єр відповідно до старовинної філософії фен-шуй, заощаджуючи час.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i5.png" alt="" />
                          <h3>ДИЗАЙН ЕКСТЕР'ЄРУ</h3>
                        </div>
                        <p>Ми об'єднуємось з вами, щоб створити ваш ідеальний план дизайну екстер'єру. Наші експертні поради та рішення дозволять скласти план для задоволення ваших потреб.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i6.png" alt="" />
                          <h3>ДЕКОРАТИВНІ ПОСЛУГИ</h3>
                        </div>
                        <p>Ми будемо раді допомогти вам змінити внутрішній вигляд вашого будинку, не витрачаючи занадто багато грошей на дизайн інтер’єру.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i7.png" alt="" />
                          <h3>ОСВІТЛЕННЯ</h3>
                        </div>
                        <p>Наша команда використовує останнє програмне забезпечення для розрахунку та дизайну освітлення, ми створюємо динамічні та інтелектуальні проекти освітлення для наших клієнтів.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i8.png" alt="" />
                          <h3>АРХІТЕКТУРА ІНТЕР'ЄРУ</h3>
                        </div>
                        <p>Ми вважаємо, що архітектура повинна забезпечувати незабутнє враження. Вихідним моментом є розуміння потреб клієнта та способу використання простору.</p>
                      </div>
                      <div className={styles.service}>
                        <div className={styles.serviceHeader}>
                          <img height={25} width={25} src="/images/i9.png" alt="" />
                          <h3>ДИЗАЙНЕРСЬКІ МЕБЛІ</h3>
                        </div>
                        <p>Іноді речі просто не можна купити в магазинах, а їх потрібно виготовити вручну. Ось чому наші клієнти цінують нас, наші партнери виготовлять меблі під ваше замовлення.</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ПРО НАС</h1>
                      <p> Ми - команда професійних, енергійних людей з талановитими дизайнерами та досвідченими менеджерами, які можуть проводити наших клієнтів через бездоганне та своєчасне виконання будь-якого проекту житлового дизайну.З першого дня ми пропонуємо творчі та затишні інтер'єри для наших клієнтів.</p>
                      <div className={styles.aboutUsBlocks}>
                        <div className={styles.aboutUsBlock}>
                          <div className={styles.aboutUsBlockHead}>
                            <img height={25} width={30} src="/images/i11.png" alt="" />
                          <h3>НАГОРОДИ</h3>
                          </div>
                           <p>Ми отримали численні нагороди за наші дизайни, концепції та ідеї.</p>
                        </div>
                        <div className={styles.aboutUsBlock}>
                          <div className={styles.aboutUsBlockHead}>
                          <img height={25} width={30}  src="/images/i10.png" alt="" />
                          <h3>КОМАНДА</h3>
                          </div >
                           <p>Ми - команда спеціалістів, що займаються дизайном інтер'єру.</p>
                        </div>
                      </div>
                      <div className={styles.regals}>
                        <div className={styles.regal}>
                          <div className={styles.regalText}>
                            <p>Виконані завдання</p>
                            <p>100%</p>
                          </div>
                          <div className={styles.regalLine}></div>
                        </div>
                        <div className={styles.regal}>
                          <div className={styles.regalText}>
                            <p>Задоволені клієнти</p>
                            <p>99%</p>
                          </div>
                          <div className={styles.regalLine}></div>
                        </div>
                      </div>
                    </div>
                    <img width={400} height={600} src="/images/about.jpg" alt="" />
                  </div>
                  <div className={styles.ourProjects}>
                    <h1>НАШІ РОБОТИ</h1>
                    <div className={styles.ourItems}>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>ВІТАЛЬНІ</h4>
                      <p>Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції.</p>
                      <button>Переглянути</button>
                    </div>         
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>СПАЛЬНІ</h4>
                      <p>Створимо дизайн для вашої спальні, щоб Вам було зручно і комфорно відпочивати і насолоджуватись затишною атмосферою. Адже спальня це місце де ми проводимо найбільше часу.</p>
                      <button>Переглянути</button>
                    </div>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>КУХНІ</h4>
                      <p>Незалежно від того, чи є це частиною житлового будинку чи квартири, добре структурована та оформлена кухня є життєво важливою для комфортного проживання незалежно від розміру.</p>
                      <button>Переглянути</button>
                    </div>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>ДИТЯЧІ</h4>
                      <p>Наші навички та професіоналізм дозволяють нам працювати над візуальним та функціональним вдосконаленням дитячих, ваші діти будуть приємно вражені.</p>
                      <button>Переглянути</button>
                    </div>    
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>КАБІНЕТ</h4>
                      <p>Наша дизайнерська студія часто займається реконструкцією та переробкою кабінету. Ми зможемо успішно перетворити ваш офіс у візуально привабливий центр ділової активності</p>
                      <button>Переглянути</button>
                    </div>    
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>КОРИДОР</h4>
                      <p>Шукаєте ідею створити новий або перетворити старий коридор? Довіртеся нашим винятково кваліфікованим дизайнерам та архітекторам, якщо ви прагнете досягти найкращих результатів.</p>
                      <button>Переглянути</button>
                    </div>    
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>ВІТАЛЬНІ</h4>
                      <p>Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції.</p>
                      <button>Переглянути</button>
                    </div>    
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>ВАННА КІМНАТА</h4>
                      <p>Ванна кімната – місце, де починається та закінчується кожен новий день. Оформлення даного приміщення може стати джерелом втілення Ваших бажань та наших сміливих креативних ідей.</p>
                      <button>Переглянути</button>
                    </div>    
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h4>ДИЗАЙН ЕКСТЕР'ЄРУ</h4>
                      <p>Використовуючи комбінації натуральних матеріалів і ультрасучасних технологій, наші фахівці органічно вписують будь-яку архітектуру в природний ландшафт місцевості.</p>
                      <button>Переглянути</button>
                    </div>    
                    </div>
                  </div>
                  <div className={styles.yellowBlock2}>
                    <div className={styles.yellowBlock2Content}>
                      <img  height={50} width={50} src="/images/t1.png" alt="" />
                       <h1>40</h1>
                       <h4>ПРОЕКТИ ЩОРІЧНО</h4>
                    </div>
                    <div className={styles.yellowBlock2Content}>
                    <img  height={50} width={50} src="/images/t2.png" alt="" />
                       <h1>15</h1>
                       <h4>НАГОРОДИ</h4>
                    </div>
                    <div className={styles.yellowBlock2Content}>
                    <img  height={50} width={50} src="/images/t3.png" alt="" />
                       <h1>99%</h1>
                       <h4>ПОЗИТИВНІ ВІДГУКИ</h4>
                    </div>
                    <div className={styles.yellowBlock2Content}>
                    <img height={50} width={50} src="/images/t4.png" alt="" />
                       <h1>100k</h1>
                       <h4>ЩАСЛИВІ КЛІЄНТИ</h4>
                    </div>
                  </div>
                  <div  className={styles.sliderStyles2}>
                    <div  className={styles.slideStyles2} >
                    <div  className={styles.slideItem} >
                       <img  height={100} width={100} src={slides2[currentIndex].src}/> 
                          <p>{slides2[currentIndex].p}</p>
                          <h4>{slides2[currentIndex].name}</h4>
                          </div>
                        <div className={styles.leftArrowStyles2} onClick={goToPrevios2}>
                          <img height={22} width={22} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles2} onClick={goToNext2}> 
                        <img height={22} width={22} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides.map((item,slideIndex)=><div onClick={() => goToSlide2(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                </div>
                </main>
        <footer></footer>

      </div>
    </div>
    </>
  );
}

export default App;
