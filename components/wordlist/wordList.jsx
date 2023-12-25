import styles from "./wordList.module.css";

export default function WordList({ words }) {
  return (
    <div>
      <ul className={styles.wordList}>
        {words.map((word) => (
          <li className={styles.word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
