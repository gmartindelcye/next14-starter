import styles from './footer.module.css';

const Footer = () => {  
    return (
        <div className={styles.container}>
          <div className={styles.logo}>Luz Capital</div>
          <div className={styles.text}>
            Luz Capital &copy; All rights reserved.
          </div>
        </div>
    )
  };

export default Footer;