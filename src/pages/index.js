import React from 'react';
import Link from 'gatsby-link';
import styles from "./index.module.scss";
console.log('styles: ', styles);

const IndexPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      <div className={styles.bio}>
        <h1 className={styles.h1}>Alex Martinez</h1>
        <ul className={styles.socialIconList}>
          social icons
        </ul>
        <p className={styles.copy}>
          I'm a product designer,
        </p>
        <p className={styles.copy}>
          front-end developer,
        </p>
        <p className={styles.copy}>
          wannabe <span className={styles.footballTrigger}>footballer</span>.
        </p>
        <nav className="nav--homepage">
          <ul className={styles.homeLinks}>
            <li className={styles.homeLink}>
              <a href="work" className="link--text text--mono">
                Work
              </a>
            </li>
            <li className={styles.homeLink}>
              <a href="about" className="link--text text--mono">
                About
              </a>
            </li>
            <li className={styles.homeLink}>
              <a href="thoughts" className="link--text text--mono">
                Thoughts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className={styles.bgImageToggle}>
      <div className={styles.bgImages}>
        <div className={styles.bgImageContainer}>
          <div className={styles.bgImage}>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
