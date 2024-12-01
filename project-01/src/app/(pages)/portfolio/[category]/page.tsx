import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { DataProps, Item, items } from "./data";
import { notFound } from "next/navigation";
import Btn from "@/app/components/button/Button";

interface PageParams {
  category: string;
}

const getData = (cat: keyof DataProps): Item[] | never => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: { params: PageParams }) => {
  const data = getData(params.category as keyof DataProps);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Btn text="See More" path="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
