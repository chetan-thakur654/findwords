import React from "react";
import styles from "./page.module.css";
import WordFinderForm from "../../../../components/form/form";
import { mainPages } from "../../../../data/mainPages";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import Script from "next/script";

export default function layout({ children }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6954377897433069"
        crossorigin="anonymous"
      ></Script>
      <div className={styles.home}>
        <div className={styles.left}>
          <div className={styles["form-container"]}>
            <WordFinderForm />
          </div>
          {children}
        </div>
        <aside className={styles.right}>
          <div className={styles["sidebar-item"]}>
            <div className={styles["filter-words"]}>
              <h2>Advanced Word Search</h2>
              <WordFinderForm />
            </div>
          </div>
          <hr />
          <div className={styles["sidebar-item"]}>
            <div className={styles["other-words-finder"]}>
              <h2>Other Words Finder</h2>
              <div className="finder-list">
                <ul>
                  {mainPages?.map(({ name, link, data }) => (
                    <li>
                      <Link href={`/${link}`}>
                        <div>
                          <h3>{name}</h3>
                          {/* <span>{data}</span> */}
                        </div>
                        <div>
                          <SlArrowRight />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
