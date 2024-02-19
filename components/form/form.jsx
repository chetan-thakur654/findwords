"use client";
import React, { useState } from "react";
import styles from "./WordFinderForm.module.css"; // Import your CSS module
import { useRouter } from "next/navigation";

const WordFinderForm = ({ onSearch }) => {
  const [searchOptions, setSearchOptions] = useState({
    "starts-with": "",
    "in-middle": "",
    "ends-with": "",
    "containing-letters": "",
    "with-exactly": "",
    numberOfLetters: "5-letter-words",
  });
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter out empty values from searchOptions
    const nonEmptyOptions = Object.fromEntries(
      Object.entries(searchOptions).filter(
        ([key, value]) => value.trim() !== ""
      )
    );
    // Count the number of selected fields (excluding numberOfLetters)
    const selectedFieldsCount = Object.keys(nonEmptyOptions).length;

    // Ensure that the user has selected no more than two additional fields
    if (selectedFieldsCount > 3) {
      alert("You Can Select Upto Three Fields Only.");
      return;
    }

    // If only one field is filled, construct the URL accordingly
    if (selectedFieldsCount === 2) {
      // If two fields are filled, join their keys and values in the URL
      const [field1, value1] = Object.entries(nonEmptyOptions)[0];
      const [field2, value2] = Object.entries(nonEmptyOptions)[1];
      const dynamicUrl = `${value2}/${field1}/${value1}`;

      // Assuming you have the API endpoint URL
      const apiUrl = `/${dynamicUrl}`;
      router.push(apiUrl);
      return;
    }
    // If only one field is filled, construct the URL accordingly
    if (selectedFieldsCount === 3) {
      const renamedOptions = {
        "starts-with": "starts",
        "in-middle": "middle",
        "ends-with": "ends",
      };

      // If two fields are filled, join their keys and values in the URL
      const [field1, value1] = Object.entries(nonEmptyOptions)[0];
      const [field2, value2] = Object.entries(nonEmptyOptions)[1];
      const [field3, value3] = Object.entries(nonEmptyOptions)[2];
      const dynamicUrl = `${value3}/${renamedOptions[field1]}-and-${renamedOptions[field2]}/${value1}-${value2}`;
      //   // Assuming you have the API endpoint URL
      const apiUrl = `/${dynamicUrl}`;
      //   console.log(apiUrl);
      router.push(apiUrl);
      return;
    }
  };

  return (
    <form className={styles.wordFinderForm} onSubmit={handleSearch}>
      <input
        type="text"
        name="starts-with"
        value={searchOptions.starts}
        placeholder="Starts with"
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="in-middle"
        value={searchOptions.middle}
        placeholder="In the middle"
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="ends-with"
        value={searchOptions.ends}
        placeholder="Ends with"
        onChange={handleInputChange}
      />

      <div
        className={`${styles.advancedSearchFields} ${
          showAdvancedSearch ? styles.show : ""
        }`}
      >
        <input
          type="text"
          name="containing-letters"
          value={searchOptions.contains}
          placeholder="Contains letters (anywhere)"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="with-exactly"
          value={searchOptions.containsExactly}
          placeholder="Contains exactly (anywhere)"
          onChange={handleInputChange}
        />
      </div>
      <select
        name="numberOfLetters"
        value={searchOptions.numberOfLetters}
        onChange={handleInputChange}
      >
        <option value="">5 letter words</option>
        {[...Array(15).keys()].map((num) => (
          <option key={num + 2} value={`${num + 2}-letter-words`}>
            {num + 2} letter words
          </option>
        ))}
      </select>

      <button type="submit" className={styles.searchButton}>
        Search
      </button>

      <button
        className={`${styles.advancedSearchButton}`}
        onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
      >
        {showAdvancedSearch ? "Hide Advanced Search" : "Show Advanced Search"}
      </button>
    </form>
  );
};

export default WordFinderForm;
