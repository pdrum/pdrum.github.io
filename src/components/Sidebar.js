import * as styles from "../styles/Sidebar.module.css";
import {FaGithub, FaHome, FaLinkedin, FaMedium} from "react-icons/fa";
import React from "react";

export default function Sidebar() {
  return <div className={`${styles.sidebar} bg-dark text-center`}>

    <img src="/avatar.jpg" alt="Avatar"
         className={`${styles.avatar} rounded-circle`}/>

    <h1 className="vertical-indent">
      Pedram Hajesmaeeli
    </h1>

    <hr/>

    <h3>Software Engineer at Glovo</h3>

    <hr/>

    <h5>
      <a href="mailto:pedram.esmaeeli@gmail.com"
         className={`text-light ${styles.noTextDecoration}`}>
        pedram.esmaeeli@gmail.com
      </a>
    </h5>

    <hr/>

    <h5>
      <a href="tel:+34678908921"
         className={`text-light ${styles.noTextDecoration}`}>
        +34678908921
      </a>
    </h5>

    <hr/>

    <div>
      <h3>
        <a href="https://pdrum.github.io"
           className={`text-light ${styles.noTextDecoration}`}>
          <FaHome className={styles.icon}/>
        </a>
        <a href="http://medium.com/@pedram.esmaeeli/"
           className={`text-light ${styles.noTextDecoration}`}>
          <FaMedium className={styles.icon}/>
        </a>
        <a href="https://www.linkedin.com/in/phajesmaeeli"
           className={`text-light ${styles.noTextDecoration}`}>
          <FaLinkedin className={styles.icon}/>
        </a>
        <a href="https://github.com/pdrum"
           className={`text-light ${styles.noTextDecoration}`}>
          <FaGithub className={styles.icon}/>
        </a>
      </h3>
    </div>

    <hr/>
  </div>
}