import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";


export interface BlogPostData {
    _id: string; // Use `_id` since MongoDB uses it for unique identifiers
    id?: number; // Optional if you're using both `id` and `_id`
    title: string;
    desc: string;
    img: string;
    username: string;
    content: string;
  }
  

async function getData(id: string): Promise<BlogPostData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }: { params: { id: string } }) {
    const post = await getData(params.id);
    return {
      title: post.title,
      description: post.desc,
    };
  }
  

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;