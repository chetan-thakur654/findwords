import WordList from "../../../../../../../components/wordlist/wordList";
import { aToz } from "../../../../../../../data/a-z";
import { getParamsData } from "../../../../../../../utility/getParamsData";
import { fetchWords } from "../../../../../../../utility/fetchWords";
import { RelatedWords } from "../../../../../../../components/relatedWordsSection/relatedWords";

export async function generateMetadata({ params }) {
  const { word_finder, letter, whatIs } = params;

  const [lNum, pageTitle] = getParamsData(word_finder);
  const parameter = { whatIs, lNum, letter };

  const data = await fetchWords(parameter);

  const { metaData, error } = data;

  return {
    title: metaData ? metaData.title : error.message,
    description: metaData ? metaData.description : error.message,
    alternates: {
      canonical: `https://findwords.co/${word_finder}/${whatIs}/${letter}`,
    },
  };
}

export default async function ContainingLetters({ params }) {
  const { word_finder, whatIs, letter } = params;

  // filtering params to get lNum
  const [lNum, pageTitle] = getParamsData(word_finder);

  const parameter = { whatIs, lNum, letter };

  const data = await fetchWords(parameter);

  const { wordsData, pageData, error } = data;

  return (
    <>
      <section>
        <h1>{pageData?.title}</h1>
        {pageData?.description.map((desc) => (
          <p>{desc}</p>
        ))}

        {wordsData?.length > 0 ? (
          <WordList data={wordsData} />
        ) : (
          <h2>{`Ooops ! ${pageData?.title} -  Not Found`}</h2>
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
  );
}
