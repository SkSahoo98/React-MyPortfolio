import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Swarup.</h1>
        <p className={styles.description}>
          I'm a FrontEnd Developer with 1 Year of Experience With Html, Css,
          JavaScript, & WordPress. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sahooamit642@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image Of Me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
