import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me On Laptop"
          className={styles.aboutimg}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                I'm a Frontend Developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>DataBase</h3>
              <p>I have fine knowledge about SQL Database.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Design</h3>
              <p>I have worked UI designing using Figma.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
