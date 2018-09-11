import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import logo from "../assets/img/qhacksLogo.svg";

export default () => (
  <div>
    <section id={styles.headerLanding}>
      <div id={styles.headerTitle}>
        <img className={styles.logo} src={logo} />
        <h2 className={styles.subTitle}>Queen's University | Winter 2019</h2>
        <div className={styles.btnRow}>
          <a
            href="https://2018.qhacks.io"
            className={classNames(styles.btn, styles.btnMain, styles.yellowBtn)}
          >
            QHacks 2018
          </a>
          <a
            href="mailto:partnership@qhacks.io"
            className={classNames(styles.btn, styles.btnMain, styles.orangeBtn)}
          >
            Partner
          </a>
        </div>
        <div className={styles.talkToUs}>
          Talk to us at:{" "}
          <a className={styles.frontContactLink} href="mailto:hello@qhacks.io">
            hello@qhacks.io
          </a>
        </div>
        <div className={styles.talkToUs}>
          This year's website is under construction!
        </div>
      </div>
    </section>
  </div>
);
