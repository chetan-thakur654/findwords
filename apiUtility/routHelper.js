import { words } from "../data/words";

export const getWords = {
  all: async (lengthMatch) => {
    const finalData = await lengthMatch.words;
    return finalData;
  },

  "starts-with": async (lengthMatch, letter) => {
    const finalData = await lengthMatch.words.filter((word) =>
      word.toLowerCase().startsWith(letter)
    );
    return finalData;
  },

  "ends-with": async (lengthMatch, letter) => {
    const finalData = await lengthMatch.words.filter((word) =>
      word.toLowerCase().endsWith(letter)
    );
    return finalData;
  },
  "in-middle": async (lengthMatch, letter) => {
    const finalData = await lengthMatch.words.filter((word) => {
      const slicedWord = word.slice(1, word.length - 1);
      const lowerCaseWord = slicedWord.toLowerCase();

      return lowerCaseWord.includes(letter);
    });
    return finalData;
  },

  "containing-letters": async (lengthMatch, letter) => {
    const letterArray = letter.split("");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      // Check if all required letters are present in the word
      return letterArray.every((letter) => lowerCaseWord.includes(letter));
    });

    return finalData;
  },

  "with-exactly": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) =>
      word.toLowerCase().includes(letter)
    );

    return finalData;
  },

  "starts-and-ends": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      // Check if all required letters are present in the word
      return (
        lowerCaseWord.startsWith(letterArray[0]) &&
        lowerCaseWord.endsWith(letterArray[1])
      );
    });

    return finalData;
  },

  "starts-and-middle": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      const slicedWord = lowerCaseWord.slice(1, word.length - 1);

      // Check if all required letters are present in the word
      return (
        slicedWord.includes(letterArray[1]) &&
        lowerCaseWord.startsWith(letterArray[0])
      );
    });

    return finalData;
  },
  "middle-and-ends": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      const slicedWord = lowerCaseWord.slice(1, word.length - 1);

      // Check if all required letters are present in the word
      return (
        slicedWord.includes(letterArray[0]) &&
        lowerCaseWord.endsWith(letterArray[1])
      );
    });

    return finalData;
  },
  "second-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[1] == letter[0];
    });

    return finalData;
  },
  "third-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[2] == letter[0];
    });

    return finalData;
  },
  "fourth-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[3] == letter[0];
    });

    return finalData;
  },
};
