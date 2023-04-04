import styles from './Footer.module.css';
import React, { useState, useEffect } from 'react';
function Footer() {  
  return (
    <>
    <footer>
        <div className={styles.footer_container}>
           <div className={styles.firstBlock}>
            <div className={styles.logo_promo}>
                <h3>S.P. Studio</h3>
                <p className={styles.promo}>Architecture & Design</p>
            </div>
            <button>Повернутися вгору</button>
           </div>
           <div className={styles.secondBlock}>
            <h4>КОНТАКТИ</h4>
             <p>E-mail: nataligladii@gmail.com</p>
             <p>Телефон +38 (099) 249-20-28</p>
             <p>Графік роботи Пн-Сб: 10 - 19</p>
           </div>
           <div className={styles.threeBlock}>
             <img width={45} height={45} src="/images/instagram.png" alt="" />
             <img width={45} height={45} src="/images/facebook.png" alt="" />
             <img width={45} height={45} src="/images/viber.png" alt="" />
             <img width={45} height={45} src="/images/telegram.png" alt="" />
           </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d158.6452961929309!2d30.48038625836912!3d50.49091359729203!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678866279717!5m2!1sru!2sua" width={1500}  height={150} ></iframe> */}
    </footer>
    </>
  );
}

export default Footer;