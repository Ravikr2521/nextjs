import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* <div className={styles.circle}>
      
    </div> */}
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src="/dashboard.jpg"
           
            className={styles.img}
          />
        </div>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Front end Developer </h1>
          <h2 className={styles.imgDesc}>Captain America</h2>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1>Who are We?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem numquam vel assumenda necessitatibus deserunt,
              optio culpa <br/> <br/>praesentium nemo voluptas quisquam, cumque maiores
              accusamus voluptatum omnis quibusdam asperiores quis, ducimus
              ipsa.
            </p>
          </div>

          <div className={styles.item}>
            <h1 className={styles.textContainer}>What we do?</h1> 
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem numquam vel assumenda necessitatibus deserunt,
              optio culpa praesentium nemo voluptas quisquam, cumque maiores
              accusamus voluptatum omnis quibusdam asperiores quis, ducimus
              ipsa.
            </p>
          <button className={styles.btn}>Click</button>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default About;
