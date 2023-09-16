import React from 'react'
import styles from "./page.module.css"

const Portfolio = () => {
  return (
    <div className={styles.card}>
    <div className={styles.cardimg}></div>
    <div className={styles.cardinfo}>
      <p className={styles.texttitle}>Aston Martin </p>
      <p className={styles.textbody}>Product description and details</p>
    </div>
    <div className={styles.cardfooter}>
    <span className={styles.texttitle} >$499.49</span>
    <div className={styles.cardbutton}>
     
    </div>
  </div></div>
  )
}

export default Portfolio
