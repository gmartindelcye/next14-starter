import Image from 'next/image';
import styles from './home.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Esse tempore nihil odio impedit facere soluta, molestiae 
          inventore aliquid? Ad sit repellat fugiat deserunt magnam 
          fuga id odio magni dolorum animi.
        </p> 
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImage}/>
      </div>
    </div>
  );
};

export default Home;