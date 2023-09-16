'use client'
import styles from './page.module.css'



const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in Touch</h1>
      <div className={styles.content}>
        <div  className={styles.imgContainer}>
          <img src="/login.jpg" 
          className={styles.img}
          alt="img"
          />

        </div>
        <form className={styles.form}>
          <input  type="text" placeholder='Enter Name' className={styles.input}/>
          <input  type="text" placeholder='Enter Email' className={styles.input}/>
        <textarea placeholder='Enter Message' className={styles.textarea}
        cols="30"
        rows="5" >

        </textarea>
        <button className={styles.btn}>Send</button>
        </form>

      </div>  
     
    </div>
  ) 
}

export default Contact
