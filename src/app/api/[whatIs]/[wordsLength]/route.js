import { NextResponse } from "next/server";
import { words } from "../../../../../data/words";
import { getWords } from "../../../../../apiUtility/routHelper";

export async function GET(NextRequest, { params }) {
  const { wordsLength } = params;

  try {
    const lengthMatch = await words.find(
      (item) => item.noOfLetters == wordsLength
    );

    if (!lengthMatch) {
      throw new Error(`oops! No Words Found`);
    }

    const finalData = await getWords["all"](lengthMatch);

    if (!finalData) {
      throw new Error(`Ooops! No Words Found`);
    }

    return NextResponse.json({ finalData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
