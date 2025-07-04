import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.content}>
        <Link href="/portfolio/illustrations" className={`${styles.item} hover:text-primary`}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={`${styles.item} hover:text-primary`}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={`${styles.item} hover:text-primary`}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
