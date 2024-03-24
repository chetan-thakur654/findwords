import WordList from "../../../components/wordlist/wordList";
import { fetchAllWords } from "../../../utility/fetchAllWords";
import WordFinderForm from "../../../components/form/form";
import styles from "./page.module.css";

export const metadata = {
  title: "Word Finder For Wordle, Scrabble , Words With Friends And More",
  description:
    "Find words for Wordle, Words with Friends, Scrabble and Other Word Games.",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://wordfinder.in/",
  },
};
export default async function Home() {
  return (
    <>
      <section>
        <h1>
          Find Words For Wordle, Srabble , Words With Friends And Other Word
          Games
        </h1>
        <p>
          If you’re a fan of word games like wordle, word with friends,
          scrabble, puzzles, or anagrams, you know how frustrating it can be to
          find a word that fits your needs. Sometimes, you have a clue, a
          pattern, or a list of letters, but you can’t think of a word that
          matches them.
        </p>
        <p>
          That’s why we created this word finder tool, that helps you find any
          word in seconds.
        </p>
        {/* {finalData?.length > 0 && <WordList data={finalData} />} */}
      </section>
      <section>
        <div className={styles.form_container}>
          <WordFinderForm />
        </div>
      </section>
      {/* <section>
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
    </>
  );
}
