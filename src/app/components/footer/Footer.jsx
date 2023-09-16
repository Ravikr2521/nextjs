import React from "react";

import styles from './footer.module.css'
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <h6>Footer Componet 1</h6>
        </div>
        <div className={styles.footer}>  
          {/* <h6>Footer Componet 2</h6> */}
          <Image src="/fblogo.png" width={20} height={20} alt="img"></Image>
          <Image src="/2.png" width={20} height={20} alt="img"  ></Image>
          <Image src="/3.png" width={20} height={20} alt="img"></Image>
          <Image src="/4.png" width={20} height={20} alt="img"></Image>
        </div>
      </div>
    </>
  );
};

export default Footer;
