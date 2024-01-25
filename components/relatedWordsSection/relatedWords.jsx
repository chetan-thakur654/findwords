import React from "react";
import styles from "../../src/app/(main layout)/(page layout)/page.module.css"; // Create a separate CSS module for styling
import Link from "next/link";
export const RelatedWords = ({
  word_finder,
  description,
  title,
  filterType,
  aToz,
}) => {
  // const title = {
  //   "starts-with": "Strating With",
  //   "ends-with": "Ending With",
  //   "containing-letters": "With",
  //   "with-exactly": "With",
  //   "in-middle": "With",
  // };
  return (
    <div className={styles["start-with"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.atoz}>
        {aToz.map((word, index) => (
          <Link key={index} href={`/${word_finder}/${filterType}/${word}`}>
            {word.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};
