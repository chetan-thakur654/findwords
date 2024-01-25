import { NextResponse } from "next/server";
import { words } from "../../../../../../data/words";
import { getWords } from "../../../../../../apiUtility/routHelper";
import { getData } from "../../../../../../apiUtility/getRouteData";

export async function GET(NextRequest, { params }) {
  const { whatIs, wordsLength, letter } = params;

  try {
    const lengthMatch = await words.find(
      (item) => item.noOfLetters == wordsLength
    );

    if (!lengthMatch) {
      throw new Error(`oops! No Words Found`);
    }

    const whatis = getWords[whatIs];
    if (!whatis) {
      throw new Error(`Ooops! No Words Found`);
    }

    const wordsData = await getWords[whatIs](lengthMatch, letter);

    if (!wordsData) {
      throw new Error(`Ooops! No Words Found`);
    }

    const { pageData, metaData } = await getData[whatIs](wordsLength, letter);

    if (!pageData || !metaData) {
      throw new Error(`Ooops! No Words Found`);
    }

    return NextResponse.json({ wordsData, pageData, metaData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
