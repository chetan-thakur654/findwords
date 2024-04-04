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

  "starts-and-exactly": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      const slicedWord = lowerCaseWord.slice(letterArray[0].length);

      // Check if all required letters are present in the word
      return (
        slicedWord.includes(letterArray[1]) &&
        lowerCaseWord.startsWith(letterArray[0])
      );
    });

    return finalData;
  },

  "starts-and-second": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord.startsWith(letterArray[0]) &&
        lowerCaseWord[1] == letterArray[1]
      );
    });

    return finalData;
  },

  "starts-and-third": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord.startsWith(letterArray[0]) &&
        lowerCaseWord[2] == letterArray[1]
      );
    });

    return finalData;
  },

  "starts-and-fourth": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord.startsWith(letterArray[0]) &&
        lowerCaseWord[3] == letterArray[1]
      );
    });

    return finalData;
  },

  "starts-and-fifth": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord.startsWith(letterArray[0]) &&
        lowerCaseWord[4] == letterArray[1]
      );
    });

    return finalData;
  },

  "first-and-second": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[0] == letterArray[0] && lowerCaseWord[1] == letterArray[1]
      );
    });

    return finalData;
  },

  "first-and-third": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[0] == letterArray[0] && lowerCaseWord[2] == letterArray[1]
      );
    });

    return finalData;
  },

  "first-and-fourth": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[0] == letterArray[0] && lowerCaseWord[3] == letterArray[1]
      );
    });

    return finalData;
  },

  "first-and-last": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[0] == letterArray[0] &&
        lowerCaseWord[lowerCaseWord.length - 1] == letterArray[1]
      );
    });

    return finalData;
  },

  "second-and-third": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[1] == letterArray[0] && lowerCaseWord[2] == letterArray[1]
      );
    });

    return finalData;
  },

  "second-and-fourth": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[1] == letterArray[0] && lowerCaseWord[3] == letterArray[1]
      );
    });

    return finalData;
  },

  "second-and-last": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[1] == letterArray[0] &&
        lowerCaseWord[lowerCaseWord.length - 1] == letterArray[1]
      );
    });

    return finalData;
  },

  "third-and-fourth": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[2] == letterArray[0] && lowerCaseWord[3] == letterArray[1]
      );
    });

    return finalData;
  },

  "third-and-last": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[2] == letterArray[0] &&
        lowerCaseWord[lowerCaseWord.length - 1] == letterArray[1]
      );
    });

    return finalData;
  },

  "fourth-and-last": async (lengthMatch, letter) => {
    const letterArray = letter.split("-");
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      // Check if all required letters are present in the word
      return (
        lowerCaseWord[3] == letterArray[0] &&
        lowerCaseWord[lowerCaseWord.length - 1] == letterArray[1]
      );
    });

    return finalData;
  },

  "first-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[0] == letter[0];
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

  "fifth-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[4] == letter[0];
    });

    return finalData;
  },

  "sixth-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[5] == letter[0];
    });

    return finalData;
  },

  "seventh-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[6] == letter[0];
    });

    return finalData;
  },

  "eighth-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[7] == letter[0];
    });

    return finalData;
  },

  "ninth-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[8] == letter[0];
    });

    return finalData;
  },

  "last-letter": async (lengthMatch, letter) => {
    const finalData = lengthMatch.words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();

      return lowerCaseWord[lowerCaseWord.length - 1] == letter[0];
    });

    return finalData;
  },
};
