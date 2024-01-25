import React from "react";
import styles from "./page.module.css";
import WordFinderForm from "../../../../components/form/form";
import { mainPages } from "../../../../data/mainPages";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export default function layout({ children }) {
  const filterData = mainPages.filter((page) => page.link !== "");

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        {/* <section>
          <h1>5 Letter Words Finder</h1>
          <p>
            If you’re a fan of word games like wordle, word with friends,
            scrabble, puzzles, or anagrams, you know how frustrating it can be
            to find a 5 letter word that fits your needs. Sometimes, you have a
            clue, a pattern, or a list of letters, but you can’t think of a word
            that matches them.
          </p>
          <p>
            That’s why we created the 5 Letter Words Finder, a simple tool that
            helps you find any 5 letter word in seconds.
          </p>
          <WordList data={data} />
        </section>
        <hr />
        <section>
          <RelatedWords
            title={`${lNum} Letter Words Starting With These Letters`}
            description={`Find All ${lNum} Letter Words that Starts With These Letters -  for Wordle, Words With Friends, Scrabble, Unscrambler, Crosswords, Puzzles And More`}
            word_finder={word_finder}
            filterType={"starts-with"}
            aToz={aToz}
          />
          <RelatedWords
            title={`${lNum} Letter Words Ending With These Letters`}
            description={`Find All ${lNum} Letter Words that Ends With These Letters -  for Wordle, Words With Friends, Scrabble, Unscrambler, Crosswords, Puzzles And More`}
            word_finder={word_finder}
            filterType={"ends-with"}
            aToz={aToz}
          />
          <RelatedWords
            title={`${lNum} Letter Words With These Letters`}
            description={`Find All ${lNum} Letter Words Containing These Letters -  for Wordle, Words With Friends, Scrabble, Unscrambler, Crosswords, Puzzles And More`}
            word_finder={word_finder}
            filterType={"with-exactly"}
            aToz={aToz}
          />
          <RelatedWords
            title={`${lNum} Letter Words With These Letters In The Middle`}
            description={`Find All ${lNum} Letter Words With These Letters In The middle -  for Wordle, Words With Friends, Scrabble, Unscrambler, Crosswords, Puzzles And More`}
            word_finder={word_finder}
            filterType={"in-middle"}
            aToz={aToz}
          />
        </section> */}
        {children}
      </div>
      <aside className={styles.right}>
        <div className="sidebar-Item">
          <div className="filter-words">
            <h2>Advanced Word Search</h2>
            <WordFinderForm />
          </div>
        </div>
        <hr />
        <div className="sidebar-Item">
          <div className={styles["other-words-finder"]}>
            <h2>Other Words Finder</h2>
            <div className="finder-list">
              <ul>
                {filterData &&
                  filterData.map(({ name, link, data }) => (
                    <li>
                      <Link href={`/${link}`}>
                        <div>
                          <h3>{name}</h3>
                          <span>{data}</span>
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
  );
}
