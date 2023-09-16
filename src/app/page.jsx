import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import home from "../../public/home.jpg";

export default function Home() {
  return (
  
 <div className={styles.container}>
 <div className={styles.item}>
   <h1 className={styles.title}>Better Design for your Product</h1>
   <p className={styles.description}>
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima
     accusantium quod esse molestias, odit optio consequatur!
   </p>
   <button className={styles.btn}>See Design </button>
 </div>
 <div className={styles.item}>
   <Image src={home} className={styles.img}></Image>
 </div>
 </div> 
    
  );
}



