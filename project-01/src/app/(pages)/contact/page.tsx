import Btn from "@/app/components/button/Button";
import Image from "next/image";
import React from "react";
import ContactImage from "../../../../public/contact.png"
import styles from "./page.module.css"

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={ContactImage} fill={true} alt="ContactImage" className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textarea} placeholder="message" name="" id=""></textarea>
          <Btn path="/" text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default page;
