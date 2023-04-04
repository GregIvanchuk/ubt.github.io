import styles from './Services.module.css';
function Services() {
  return (
    <>
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
                      {/* 
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
                      </div> */}
                    </div>
                  </div>      
    </>
  );
}
export default Services;
