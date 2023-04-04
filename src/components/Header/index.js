import styles from './Header.module.css';
import React from "react";
import { Helmet } from 'react-helmet';
import {Link} from "react-router-dom";
function Header() {
  let  [open,setOpen] = React.useState("true")
    let openHandler = () => {
        setOpen(!open);
      }
  return (
    <>
      <header className={styles.header}>
      <div className={styles.header_container}>
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet"/>
    </Helmet>
        <div className={styles.leftHeader}>
            {/* <img width={30} height={30} src="/images/Vector.png" /> */}
            <div className={styles.store_title}>
                <h3 className={styles.title_store}>S.P. Studio</h3>
                 <p>Architecture & Design</p> 
            </div>
        </div>
        <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <ul onClick={() => openHandler()} className={styles.rigthHeader}>
           <li>
           <Link to="/">
                    ГОЛОВНА
                </Link>
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
      </div>
    </header>
    </>
  );
}

export default Header;
