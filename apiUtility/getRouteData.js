export const getData = {
  "starts-with": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words That Starts With ${letter.toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words starting with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letter.toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words that starts with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };

    return { pageData, metaData };
  },
  "ends-with": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words That Ends With ${letter.toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words ending with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Ending With ${letter.toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words that ends with ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData, noOfWords };
  },
  "with-exactly": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter.toUpperCase()} `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words having ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words having ${letter.toUpperCase()} `,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words containing ${letter.toUpperCase()} for Wordle, Words with Friends, Scrabble and more`,
    };

    return { pageData, metaData };
  },
  "containing-letters": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("");

    // Convert the array into a formatted string
    const letterString = letterArray
      .join(", ")
      .toUpperCase()
      .replace(/,([^,]*)$/, " and$1");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Containing  ${letterString}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterString} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With letter ${letterString}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words containing letter ${letterString} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "in-middle": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter.toUpperCase()} in The Middle`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letter.toUpperCase()} in the middle for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter.toUpperCase()} in The Middle`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter.toUpperCase()} in the middle for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "starts-and-ends": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Ends With ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words starting with ${letterArray[0].toUpperCase()} and ending with ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And Ending With ${letterArray[1].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starts with ${letterArray[0].toUpperCase()} and ends with ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
  "starts-and-middle": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words That Starts With ${letterArray[0].toUpperCase()} And ${letterArray[1].toUpperCase()} In The Middle`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words starting with ${letterArray[0].toUpperCase()} and ${letterArray[1].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And ${letterArray[1].toUpperCase()} In The Middle`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starts with ${letterArray[0].toUpperCase()} and ${letterArray[1].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "middle-and-ends": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words That Ends With ${letterArray[1].toUpperCase()} And ${letterArray[0].toUpperCase()} In The Middle`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words ending with ${letterArray[1].toUpperCase()} and ${letterArray[0].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Ending With ${letterArray[1].toUpperCase()} And ${letterArray[0].toUpperCase()} In The Middle`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words ends with ${letterArray[1].toUpperCase()} and ${letterArray[0].toUpperCase()} in the middle, for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "starts-and-exactly": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And  Have ${letterArray[1].toUpperCase()} In Them`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words start with ${letterArray[0].toUpperCase()} and contains ${letterArray[1].toUpperCase()} , for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Have ${letterArray[1].toUpperCase()} In Them`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starting with ${letterArray[0].toUpperCase()} and contains ${letterArray[1].toUpperCase()}, for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "starts-and-second": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And  Second Letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words start with ${letterArray[0].toUpperCase()} and have ${letterArray[1].toUpperCase()} as second letter, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Have ${letterArray[1].toUpperCase()} as Second Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starting with ${letterArray[0].toUpperCase()} and second  letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "starts-and-third": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And  Third Letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words start with ${letterArray[0].toUpperCase()} and have ${letterArray[1].toUpperCase()} as third letter, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Have ${letterArray[1].toUpperCase()} as third Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starting with ${letterArray[0].toUpperCase()} and third  letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "starts-and-fourth": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And  Fourth Letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words start with ${letterArray[0].toUpperCase()} and have ${letterArray[1].toUpperCase()} as fourth letter, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Have ${letterArray[1].toUpperCase()} as fourth Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starting with ${letterArray[0].toUpperCase()} and fourth  letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "starts-and-fifth": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starting With ${letterArray[0].toUpperCase()} And  Fifth Letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words start with ${letterArray[0].toUpperCase()} and have ${letterArray[1].toUpperCase()} as fifth letter, for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words Starts With ${letterArray[0].toUpperCase()} And Have ${letterArray[1].toUpperCase()} as fifth Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words starting with ${letterArray[0].toUpperCase()} and fifth  letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "first-and-second": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With first letter ${letterArray[0].toUpperCase()} And  Second letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as first letter and ${letterArray[1].toUpperCase()} as second letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as First Letter And ${letterArray[1].toUpperCase()} as Third Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with first letter ${letterArray[0].toUpperCase()} and second letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "first-and-third": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With first letter ${letterArray[0].toUpperCase()} And  Third letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as first letter and ${letterArray[1].toUpperCase()} as third letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as First Letter And ${letterArray[1].toUpperCase()} as Third Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with first letter ${letterArray[0].toUpperCase()} and third letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "first-and-fourth": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With first letter ${letterArray[0].toUpperCase()} And  Fourth letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as first letter and ${letterArray[1].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as First Letter And ${letterArray[1].toUpperCase()} as fourth Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with first letter ${letterArray[0].toUpperCase()} and fourth letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "first-and-last": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With first letter ${letterArray[0].toUpperCase()} And  Last letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as first letter and ${letterArray[1].toUpperCase()} as last letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as First Letter And ${letterArray[1].toUpperCase()} as last Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with first letter ${letterArray[0].toUpperCase()} and last letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "second-and-third": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Second Letter ${letterArray[0].toUpperCase()} And  Third letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as second letter and ${letterArray[1].toUpperCase()} as third letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as second Letter And ${letterArray[1].toUpperCase()} as third Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with second letter ${letterArray[0].toUpperCase()} and third letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "second-and-fourth": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Second Letter ${letterArray[0].toUpperCase()} And Fourth letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as second letter and ${letterArray[1].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as second Letter And ${letterArray[1].toUpperCase()} as fourth Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with second letter ${letterArray[0].toUpperCase()} and fourth letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "second-and-last": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Second Letter ${letterArray[0].toUpperCase()} And Last letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as second letter and ${letterArray[1].toUpperCase()} as last letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as second Letter And ${letterArray[1].toUpperCase()} as last Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with second letter ${letterArray[0].toUpperCase()} and last letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "third-and-fourth": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With third Letter ${letterArray[0].toUpperCase()} And Fourth letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as third letter and ${letterArray[1].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as third Letter And ${letterArray[1].toUpperCase()} as fourth Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with third letter ${letterArray[0].toUpperCase()} and fourth letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "third-and-last": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With third Letter ${letterArray[0].toUpperCase()} And Last letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as third letter and ${letterArray[1].toUpperCase()} as last letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as third Letter And ${letterArray[1].toUpperCase()} as last Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with third letter ${letterArray[0].toUpperCase()} and last letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "fourth-and-last": (lNum, letter, noOfWords) => {
    const letterArray = letter.split("-");

    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With fourth Letter ${letterArray[0].toUpperCase()} And Last letter ${letterArray[1].toUpperCase()}`,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ${letterArray[0].toUpperCase()} as fourth letter and ${letterArray[1].toUpperCase()} as last letter for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letterArray[0].toUpperCase()} as Fourth Letter And ${letterArray[1].toUpperCase()} as last Letter`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with fourth letter ${letterArray[0].toUpperCase()} and last letter ${letterArray[1].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "first-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As First Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with first letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Unscrambler,Scrabble and more`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With First Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as first letter for Wordle, Words with Friends, Unscrambler, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "second-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Second Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with second letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Unscrambler,Scrabble and more`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Second Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as second letter for Wordle, Words with Friends, Unscrambler, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "third-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Third Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with  third letter ${letter[0].toUpperCase()} for Wordle, Words with Friends,Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Third Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as third letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "fourth-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Fourth Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with fourth letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With  Fourth Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as fourth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "fifth-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Fifth Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with fifth letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Fifth Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as fifth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "sixth-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Sixth Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with sixth letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Sixth Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as sixth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "seventh-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Seventh Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with seventh letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With  Seventh Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as seventh letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "eighth-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Eighth Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with eighth letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Eighth Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as eighth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "ninth-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Ninth Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with ninth letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Ninth Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as ninth letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },

  "last-letter": (lNum, letter, noOfWords) => {
    const pageData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With ${letter[0].toUpperCase()} As Last Letter `,
      description: [
        `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
          lNum == "all" ? "" : lNum + "-letter"
        } words with last letter ${letter[0].toUpperCase()} for Wordle, Words with Friends, Scrabble and more.`,
      ],
    };
    const metaData = {
      title: `${
        lNum == "all" ? "" : lNum + " letter"
      } Words With Last Letter ${letter[0].toUpperCase()}`,
      description: `List of ${noOfWords > 1 ? "all" : ""} ${noOfWords}, ${
        lNum == "all" ? "" : lNum + "-letter"
      } words with ${letter[0].toUpperCase()} as last letter for Wordle, Words with Friends, Scrabble and more.`,
    };

    return { pageData, metaData };
  },
};
