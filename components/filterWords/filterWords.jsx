import React from "react";
import Link from "next/link";
import styles from "../../src/app/(main layout)/page.module.css"; // Create a separate CSS module for styling

const FilterWords = ({ title, word_finder, filterType, aToz }) => {
  return (
    <div className={styles["start-with"]}>
      <h3>{title}</h3>
      <div className={styles.atoz}>
        {aToz.map((word, index) => (
          <Link key={index} href={`/${word_finder}/${filterType}/${word}`}>
            <span>{word.toUpperCase()}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterWords;
