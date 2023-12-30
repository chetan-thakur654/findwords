"use client";
import { useState } from "react";
import styles from "./wordList.module.css";
import { words } from "../../data/words";
import { starts_ends_words } from "../../data/starts_ends_with";
import { getParamsData } from "../../utility/getParamsData";

export default function WordList({ data }) {
  // const { word_finder, starts_ends_with } = params;

  // const [lNum, pageTitle] = getParamsData(params.word_finder || "null");
  // let lNum;
  // let starts_ends_with;

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 60;
  let totalPages = Math.ceil(
    starts_ends_words[`${data.lNum || "5"}`][
      `${data.starts_ends_with || "all"}`
    ].length / itemsPerPage
  );

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const resultWords = starts_ends_words[`${data.lNum}`][
    `${data.starts_ends_with || "all"}`
  ].slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul className={styles.wordList}>
        {resultWords &&
          resultWords.map((word) => <li className={styles.word}>{word}</li>)}
      </ul>
      {/* Pagination controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages} Pages`} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            endIndex >=
            starts_ends_words[`${data.lNum || "5"}`][
              `${data.starts_ends_with || "all"}`
            ].length
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
