export const getData = {
  "starts-with": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words That Starts With ${letter.toUpperCase()}`,
      description: [
        `List of all ${lNum} letter words starting with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words Starting With ${letter.toUpperCase()}`,
      description: [
        `List of all ${lNum} letter words that starts with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };

    return { pageData, metaData };
  },
  "ends-with": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words That Ends With ${letter.toUpperCase()}`,
      description: [
        `List of all ${lNum} letter words ending with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words Ending With ${letter.toUpperCase()}`,
      description: `Find all ${lNum} letter words that ends with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "with-exactly": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words Containing ${letter.toUpperCase()} `,
      description: [
        `List of all ${lNum} letter words with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With ${letter.toUpperCase()} `,
      description: `List of all ${lNum} letter words containing ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more`,
    };

    return { pageData, metaData };
  },
  "containing-letters": (lNum, letter) => {
    const letterArray = letter.split("");

    // Convert the array into a formatted string
    const letterString = letterArray
      .join(", ")
      .toUpperCase()
      .replace(/,([^,]*)$/, " and$1");

    const pageData = {
      title: `${lNum} Letter Words Containing  ${letterString}`,
      description: [
        `List of all ${lNum} letter words with ${letterString} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With letter ${letterString}`,
      description: `List of all ${lNum} letter words containing letter ${letterString} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "in-middle": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words With ${letter.toUpperCase()} in The Middle`,
      description: [
        `List of all ${lNum} letter words with ${letter.toUpperCase()} in the middle for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With ${letter.toUpperCase()} in The Middle`,
      description: `List of all ${lNum} letter words with ${letter.toUpperCase()} in the middle for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "starts-and-ends": (lNum, letter) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${lNum} Letter Words Starts With ${letterArray[0].toUpperCase()} And Ends With ${letterArray[1].toUpperCase()}`,
      description: [
        `List of all ${lNum} letter words starting with ${letterArray[0].toUpperCase()} and ending with ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words Starting With ${letterArray[0].toUpperCase()} And Ending With ${letterArray[1].toUpperCase()}`,
      description: `List of all ${lNum} letter words starts with ${letterArray[0].toUpperCase()} and ends with ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "starts-and-middle": (lNum, letter) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${lNum} Letter Words That Starts With ${letterArray[0].toUpperCase()} And ${letterArray[1].toUpperCase()} In The Middle`,
      description: [
        `List of all ${lNum} letter words starting with ${letterArray[0].toUpperCase()} and ${letterArray[1].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words Starting With ${letterArray[0].toUpperCase()} And ${letterArray[1].toUpperCase()} In The Middle`,
      description: `List of all ${lNum} letter words starts with ${letterArray[0].toUpperCase()} and ${letterArray[1].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "middle-and-ends": (lNum, letter) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${lNum} Letter Words That Ends With ${letterArray[1].toUpperCase()} And ${letterArray[0].toUpperCase()} In The Middle`,
      description: [
        `List of all ${lNum} letter words ending with ${letterArray[1].toUpperCase()} and ${letterArray[0].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words Ending With ${letterArray[1].toUpperCase()} And ${letterArray[0].toUpperCase()} In The Middle`,
      description: `List of all ${lNum} letter words ends with ${letterArray[1].toUpperCase()} and ${letterArray[0].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "second-letter": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Second Letter `,
      description: [
        `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as second letter for Wordle, Words with Friends, Unscrambler,Scrabble and more`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Second Letter `,
      description: `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as second letter for Wordle, Words with Friends, Unscrambler, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "third-letter": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Third Letter `,
      description: [
        `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as third letter for Wordle, Words with Friends,Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Third Letter `,
      description: `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as third letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "fourth-letter": (lNum, letter) => {
    const pageData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Fourth Letter `,
      description: [
        `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${lNum} Letter Words With ${letter[0].toUpperCase()} As Fourth Letter `,
      description: `List of all ${lNum} letter words with ${letter[0].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
};
