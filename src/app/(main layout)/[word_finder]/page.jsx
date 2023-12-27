import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import styles from "../page.module.css";
import WordList from "../../../../components/wordlist/wordList";
import { aToz } from "../../../../data/a-z";
import { getParamsData } from "../../../../utility/getParamsData";
import { mainPages } from "../../../../data/mainPages";
import { words } from "../../../../data/words";

export async function generateMetadata({ params }) {
  const [lNum, pageTitle] = getParamsData(params.word_finder);

  return {
    title: `${lNum} letter words finder | Wordle Solver | Unscrambler Words | Words with Friends Solver`,
    description: `Find ${lNum} letter words for Wordle, Words with Friends, unscrambler and more`,
    alternates: {
      canonical: `https://findwords.co/${params.word_finder}`,
      // languages: {
      //   'en-US': '/en-US',
      //   'de-DE': '/de-DE',
      // },
    },
  };
}

export default function WordFinder({ params }) {
  const [lNum, pageTitle] = getParamsData(params.word_finder);

  // Getting filtered data
  const filterData = mainPages.filter((page) => page.name != pageTitle);

  const wordsData = words[`${lNum}`];

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <section>
          <h1>{`${lNum} Letter Words Finder`}</h1>
          <p>
            {`If you’re a fan of word games, scrabble, words with friends, wordle, puzzles, anagrams, you know how
            frustrating it can be to find a ${lNum} letter word that fits your needs.
            Sometimes, you have a clue, a pattern, or a list of letters, but you
            can’t think of a word that matches them.`}
          </p>
          <p>
            {`That’s why we created the ${lNum} Letter Words Finder, a simple tool that
            helps you find any ${lNum} letter word in seconds.`}
          </p>
          {wordsData ? (
            <WordList words={wordsData} />
          ) : (
            <h2>{`Soon , We will Update ${lNum} letter words !`}</h2>
          )}
        </section>
        <hr />
        <section>
          <div className={styles["start-with"]}>
            <h2>3 Letter Words Starts With These Letters</h2>
            <p>
              Explore the wonders of 3 letter words! Find amazing words that
              begin with any letter you choose.
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/3-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles["start-with"]}>
            <h2>4 Letter Words Starts With These Letters</h2>
            <p>
              Unlock the power of 4 letter magic! Discover a treasure trove of
              captivating words starting with specific letters.
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/4-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles["start-with"]}>
            <h2>5 Letter Words Starts With These Letters</h2>
            <p>
              Unlock a world of possibilities with 5 letter words. Expand your
              vocabulary, conquer word games, and unleash your creativity.
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/5-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles["start-with"]}>
            <h2>6 Letter Words Starts With These Letters</h2>
            <p>
              Seeking 6 letter words starting with specific letters? Dive into a
              captivating world of vocabulary, conquer word games, and express
              yourself with newfound power!
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/6-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles["start-with"]}>
            <h2>7 Letter Words Starts With These Letters</h2>
            <p>
              Discover a world of possibilities with 7 letter words starting
              with specific letters. Expand your vocabulary, conquer word games,
              and express yourself with precision.
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/7-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles["start-with"]}>
            <h2>8 Letter Words Starts With These Letters</h2>
            <p>
              Find all 8 letter words for puzzles, scrabble and words with
              friends that starts with these letters.
            </p>
            <div className={styles.atoz}>
              {aToz.map((word) => (
                <Link href={`/8-letter-words-finder/starts-with-${word}`}>
                  {word.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <aside className={styles.right}>
        <div className="sidebar-Item">
          <div className="filter-words">
            <h2>{`Filter ${lNum} Letter Words`}</h2>
            <div className={styles["start-with"]}>
              <h3>Starts with</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`/${params.word_finder}/starts-with-${word}`}>
                    <span>{word.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles["start-with"]}>
              <h3>Ends with</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`${params.word_finder}/starts-with-${word}`}>
                    <span>{word.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
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
