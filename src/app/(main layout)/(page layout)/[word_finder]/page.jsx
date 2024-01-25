import WordList from "../../../../../components/wordlist/wordList";
import { aToz } from "../../../../../data/a-z";
import { getParamsData } from "../../../../../utility/getParamsData";
import { fetchAllWords } from "../../../../../utility/fetchAllWords";
import { RelatedWords } from "../../../../../components/relatedWordsSection/relatedWords";

export async function generateMetadata({ params }) {
  const [lNum, pageTitle] = getParamsData(params.word_finder);

  return {
    title: `${lNum} Letter Words Finder | Wordle Solver | Unscrambler Words Helper | Words with Friends Solver`,
    description: `Find ${lNum} Letter Words For Wordle, Words with Friends, Unscrambler Helper ,Scrabble Solver, Anagram and More`,
    alternates: {
      canonical: `https://findwords.co/${params.word_finder}`,
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
            {`If you’re a fan of word games, scrabble, words with friends, wordle, puzzles, anagrams, you know how
            frustrating it can be to find a ${lNum} letter word that fits your needs.
            Sometimes, you have a clue, a pattern, or a list of letters, but you
            can’t think of a word that matches them.`}
          </p>
          <p>
            {`That’s why we created the ${lNum} Letter Words Finder, a simple tool that
            helps you find any ${lNum} letter word in seconds.`}
          </p>
          {finalData?.length > 0 ? (
            <WordList data={finalData} />
          ) : (
            <h2>{`Soon , We will Update ${lNum} letter words !`}</h2>
          )}
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
        </section>
      </>
    </>
  );
}
