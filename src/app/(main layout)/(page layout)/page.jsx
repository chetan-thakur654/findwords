import WordList from "../../../../components/wordlist/wordList";
import { aToz } from "../../../../data/a-z";
import { fetchAllWords } from "../../../../utility/fetchAllWords";
import { RelatedWords } from "../../../../components/relatedWordsSection/relatedWords";

export default async function Home() {
  const lNum = "5";
  const word_finder = "5-letter-words";

  const data = await fetchAllWords(lNum);
  const { finalData } = data;

  return (
    <>
      <section>
        <h1>5 Letter Words Finder</h1>
        <p>
          If you’re a fan of word games like wordle, word with friends,
          scrabble, puzzles, or anagrams, you know how frustrating it can be to
          find a 5 letter word that fits your needs. Sometimes, you have a clue,
          a pattern, or a list of letters, but you can’t think of a word that
          matches them.
        </p>
        <p>
          That’s why we created the 5 Letter Words Finder, a simple tool that
          helps you find any 5 letter word in seconds.
        </p>
        {finalData?.length > 0 && <WordList data={finalData} />}
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
  );
}
