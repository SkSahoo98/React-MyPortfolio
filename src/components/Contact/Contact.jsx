import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free To Reach Out!!!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:sahooamit642@gmail.com" target="_blank">sahooamit642@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/swarup-sahoo-377026241/" target="_blank">Linkedin.com/Swarup</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="https://github.com/SkSahoo98" target="_blank">github.com/Swarup</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
