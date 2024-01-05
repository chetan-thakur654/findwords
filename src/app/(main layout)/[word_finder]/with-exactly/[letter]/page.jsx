import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import styles from "../../../page.module.css";
import WordList from "../../../../../../components/wordlist/wordList";
import { aToz } from "../../../../../../data/a-z";
import { getParamsData } from "../../../../../../utility/getParamsData";
import { mainPages } from "../../../../../../data/mainPages";
import { words } from "../../../../../../data/words";

export async function generateMetadata({ params }) {
  const { word_finder, letter } = params;

  const [lNum, pageTitle] = getParamsData(word_finder);

  return {
    title: `${lNum} Letter Words With ${letter.toUpperCase()}`,
    description: `Find all ${lNum} letter words containing ${letter.toLowerCase} for Wordle, Words with Friends, unscrambler, Crosswords, Puzzles and more`,
    alternates: {
      canonical: `https://findwords.co/${word_finder}/with-exactly/${letter}`,
      // languages: {
      //   'en-US': '/en-US',
      //   'de-DE': '/de-DE',
      // },
    },
  };
}

export default function WithExactly({ params }) {
  const { word_finder, letter } = params;

  // filtering params to get lNum
  const [lNum, pageTitle] = getParamsData(word_finder);

  // filter words that starts with particuler letters
  const NoOfletters = words.find((word) => word.noOfLetters == lNum);
  const data = NoOfletters.words.filter((word) =>
    word.toLowerCase().includes(letter)
  );

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <section>
          <h1>{`${lNum} Letter Words Containing ${letter.toUpperCase()} `} </h1>
          <p>
            {`Find all ${lNum} letter words with ${letter.toUpperCase()} for Wordle, Words with Friends, scrambler, anagrams and more`}
          </p>
          <p>
            {`We have created the ${lNum} Letter Words Finder, a simple tool that helps
            you find any ${lNum} letter words that contains ${letter.toUpperCase()} in seconds.`}
          </p>
          {data.length > 0 ? (
            <WordList data={data} />
          ) : (
            <h2>
              {` Sorry ! We don't have ${lNum} letter words with ${letter.toUpperCase()} in our database at the
              moment`}
            </h2>
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
                <Link href={`/3-letter-words/starts-with/${word}`}>
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
                <Link href={`/4-letter-words/starts-with/${word}`}>
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
                <Link href={`/5-letter-words/starts-with/${word}`}>
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
                <Link href={`/6-letter-words/starts-with/${word}`}>
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
                <Link href={`/7-letter-words/starts-with/${word}`}>
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
                <Link href={`/8-letter-words/starts-with/${word}`}>
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
              <h3>Starts With a Letter</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`/${word_finder}/starts-with/${word}`}>
                    <span>{word.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles["start-with"]}>
              <h3>Ends With a Letter</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`/${word_finder}/ends-with/${word}`}>
                    <span>{word.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles["start-with"]}>
              <h3>Containing a Letter</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`/${word_finder}/with-exactly/${word}`}>
                    <span>{word.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles["start-with"]}>
              <h3>Letter in the Middle</h3>
              <div className={styles.atoz}>
                {aToz.map((word) => (
                  <Link href={`/${word_finder}/in-middle/${word}`}>
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
                {mainPages &&
                  mainPages.map(({ name, link, data }) => (
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
