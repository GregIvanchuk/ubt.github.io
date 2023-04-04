import styles from './Main.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SecondSlider from './SecondSlider';
import Services from './Services';
import YellowBlock from './YellowBlock';
import MainSlider from './MainSlider';
import {Link} from "react-router-dom";
// import testSlider from "./testSlider";


function Main() {
  const PortItems = [{id:1, img:"/images/slide2.jpg", title: "ВІТАЛЬНІ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                     {id:2, img:"/images/slide2.jpg", title: "СПАЛЬНІ", text: "Створимо дизайн для вашої спальні, щоб Вам було зручно і комфорно відпочивати і насолоджуватись затишною атмосферою. Адже спальня це місце де ми проводимо найбільше часу."},
                     {id:3, img:"/images/slide2.jpg", title: "КУХНІ", text: "Незалежно від того, чи є це частиною житлового будинку чи квартири, добре структурована та оформлена кухня є життєво важливою для комфортного проживання незалежно від розміру."},
                     {id:4, img:"/images/slide2.jpg", title: "КОРИДОР", text: "Шукаєте ідею створити новий або перетворити старий коридор? Довіртеся нашим винятково кваліфікованим дизайнерам та архітекторам, якщо ви прагнете досягти найкращих результатів."},
                     {id:5, img:"/images/slide2.jpg", title: "ДИТЯЧІ", text: "Наші навички та професіоналізм дозволяють нам працювати над візуальним та функціональним вдосконаленням дитячих, ваші діти будуть приємно вражені."},
                     {id:6, img:"/images/slide2.jpg", title: "КАБІНЕТ", text: "Наша дизайнерська студія часто займається реконструкцією та переробкою кабінету. Ми зможемо успішно перетворити ваш офіс у візуально привабливий центр ділової активності."},
                     {id:7, img:"/images/slide2.jpg", title: "ВАННА КІМНАТА", text: "Ванна кімната – місце, де починається та закінчується кожен новий день. Оформлення даного приміщення може стати джерелом втілення Ваших бажань та наших сміливих креативних ідей."},
                     {id:8, img:"/images/slide2.jpg", title: "ДИЗАЙН ЕКСТЕР'ЄРУ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                     {id:9, img:"/images/slide2.jpg", title: "ВІТАЛЬНІ", text: "ДИЗАЙН ЕКСТЕР'ЄРУ", text:"Використовуючи комбінації натуральних матеріалів і ультрасучасних технологій, наші фахівці органічно вписують будь-яку архітектуру в природний ландшафт місцевості."},]
  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
        <main>
           <MainSlider/>
          <div className="container">
             
                <div className={styles.yellowBlock}>
                  <h1>ЗРУЧНІ ТА ДОСТУПНІ ПРОЕКТИ ДИЗАЙНУ ІНТЕР’ЄРУ</h1>
                  <button className={styles.detail}>Детальніше</button>
                  </div>
                  {/* <testSlider/> */}
                  <Services/>
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
                   { PortItems.map((item) =>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src={item.img} />
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <Link to="/portfolio"><button>Переглянути</button></Link>
                    </div>     
                    )}    
                    </div>
                  </div>
                  <YellowBlock/>
                  <SecondSlider/>
                  </div>
                  </main>
    </>
  );
}
export default Main;
