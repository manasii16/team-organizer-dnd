import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo2.jpg'

export default function Header() {
  return (
    <header className={styles.banner}>
      <div className={styles.brand}>
        <img src={logo} className={styles.logo} />
        <h1 className={styles.title}>Team Organizer</h1>
      </div>
      {/* <p className={styles.tagline}>
        Effortlessly organize your team by dragging employees from the pool into
        your project team.
      </p> */}
    </header>
  );
}