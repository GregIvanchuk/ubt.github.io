import styles from './Header.module.css';
import React from "react";
function Header() {
  let  [open,setOpen] = React.useState("true")
    let openHandler = () => {
        setOpen(!open);
      }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
            <img width={30} height={30} src="/images/Vector.png" />
            <div className={styles.store_title}>
                <h3 className={styles.title_store}>UBT</h3>
                {/* <p>Найкращий вибір вітамінів та спортивних добавок</p> */}
            </div>
        </div>
        <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <ul onClick={() => openHandler()} className={styles.rigthHeader}>
           <li>
            <a>ГОЛОВНА</a>
            </li>
            <li>
            <a>ПОСЛУГИ</a>
            </li>
            <li>
            <a>ПОРТФОЛІО</a>
            </li>
            <li>
            <a>ЕТАПИ</a>
            </li>
            <li>
            <a>КОНТАКТИ</a>
            </li>
        </ul>
        </div>
        <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
    </header>
    </>
  );
}

export default Header;
