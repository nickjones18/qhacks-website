import React from "react";
import Helmet from "react-helmet";
import classNames from "classnames";
import styles from "./index.module.css";
import logo from "../assets/img/qhacksLogo.svg";
import favicon from "../assets/img/favicon.ico";

export default () => (
  <div>
    <Helmet
      title="QHacks | Queen's University | Winter 2019"
      meta={[
        {
          name: "description",
          content:
            "QHacks is back for round four! We're bringing in students from all over North America to come together for a wild 36 hours - designing, developing, demoing, cup-stacking, and foosball-playing at our home base at Queen's University. Whether you're a first timer or a seasoned veteran, QHacks definitely has something to satisfy your interests. This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study are encouraged to bring their innovative ideas for a weekend of creative problem solving! The only prerequisites for this weekend are a love for tech and drive to learn."
        },
        {
          name: "keywords",
          content: "Hackathon, Queen's University, Kingston, QHacks, Queensu"
        }
      ]}
      link={[
        { rel: "shortcut icon", href: `${favicon}` },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Encode+Sans:400,700,900,100,300"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Lato:400,700,900,100,300"
        }
      ]}
    />
    <section id={styles.headerLanding}>
      <div id={styles.headerTitle}>
        <img className={styles.logo} src={logo} />
        <h2 className={styles.subTitle}>
          Queen's University | February 1<sup>st</sup> - 3<sup>rd</sup>, 2019
        </h2>
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
