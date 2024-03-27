import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a className={styles.dev} href="https://iifeofadarkrose.github.io/portfolio-web/">Web Developers</a>
      </div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;