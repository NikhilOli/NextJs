import Image from "next/image";
import HeroImage from "../../public/hero.png";
import styles from "./page.module.css"
import Btn from "./components/button/Button";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Btn path="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={HeroImage} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default page;
