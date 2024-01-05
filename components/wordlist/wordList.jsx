"use client";
import { useState } from "react";
import styles from "./wordList.module.css";

export default function WordList({ data }) {
  // const { word_finder, starts_ends_with } = params;

  // const [lNum, pageTitle] = getParamsData(params.word_finder || "null");
  // let lNum;
  // let starts_ends_with;

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 60;
  // let totalPages = Math.ceil(
  //   starts_ends_words[`${data.lNum || "5"}`][
  //     `${data.starts_ends_with || "all"}`
  //   ].length / itemsPerPage
  // );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const resultWords = data.slice(startIndex, endIndex);

  //  const startAndEndsWith = filteredWords.words.filter((word) => {
  //   const lowerCaseWord = word.toLowerCase();
  //   return lowerCaseWord.startsWith(data.startAndEndsWith) || lowerCaseWord.endsWith("b");
  // });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul className={styles.wordList}>
        {resultWords &&
          resultWords.map((word, index) => (
            <li key={index} className={styles.word}>
              {word}
            </li>
          ))}
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
          disabled={endIndex >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
