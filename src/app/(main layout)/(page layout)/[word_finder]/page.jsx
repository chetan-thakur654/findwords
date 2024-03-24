import WordList from "../../../../../components/wordlist/wordList";
import { aToz } from "../../../../../data/a-z";
import styles from "./page.module.css";
import { getParamsData } from "../../../../../utility/getParamsData";
import { fetchAllWords } from "../../../../../utility/fetchAllWords";
import { RelatedWords } from "../../../../../components/relatedWordsSection/relatedWords";

export async function generateMetadata({ params }) {
  const [lNum, pageTitle] = getParamsData(params.word_finder);

  return {
    title: `${lNum} Letter Words Finder For Wordle, Scrabble, Words With With Friends And More`,
    description: `Find ${lNum} Letter Words For Wordle, Scrabble, Words with Friends, Anagram and Other Word Games.`,
    alternates: {
      canonical: `https://wordfinder.in/${params.word_finder}`,
    },
  };
}

export default async function WordFinder({ params }) {
  const { word_finder } = params;

  const [lNum, pageTitle] = getParamsData(params.word_finder);

  // Getting filtered data

  const data = await fetchAllWords(lNum);
  const { finalData, error } = data;

  return (
    <>
      <>
        <section>
          <h1>{`${lNum} Letter Words Finder`}</h1>
          <p>
            {`Looking to dominate Scrabble, crush Wordle, or ace  Words with Friends? Look no further! Our innovative ${lNum} Letter Word Finder Tool is here to supercharge your vocabulary and unlock winning possibilities.`}
          </p>
          <h2>Target Specific Letter Combinations</h2>
          <ul className={styles.list}>
            <li>
              <strong>Starting With : </strong>
              {`  Find ${lNum} letter words that starts with
              your chosen letter, perfect for exploiting those juicy double word
              score opportunities.`}
            </li>
            <li>
              <strong>Ending With : </strong>
              {`Craft the perfect closing move by discovering  ${lNum} letter words that ends with your desired letter.`}
            </li>
            <li>
              <strong>Specific Letters : </strong>
              {`Narrow down the options and find ${lNum} letter words by specifying the first, second, third, or even fourth letter.`}
            </li>
            <li>
              <strong>Containing Letters : </strong>
              {`Unearth hidden gems within your jumble of letters. Simply enter the letters you want in your ${lNum} letter word and watch the magic happen.`}
            </li>
            <li>
              <strong>In The Middle : </strong>
              {`Find any ${lNum} letter word with specific letter in the middle.`}
            </li>
          </ul>
          {finalData?.length > 0 ? (
            <WordList data={finalData} />
          ) : (
            <h2>{`Soon , We will Update ${lNum} letter words !`}</h2>
          )}
        </section>
        {/* <hr />
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
      </>
    </>
  );
}
