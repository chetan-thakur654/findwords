import styles from "./aboutUs.module.css";

export const metadata = {
  title: "About us | FindWords.co",
  description:
    "Discover the heart behind FindWords.co. We're passionate about words and committed to providing a one-stop solution for all your word-related needs. Try our tool and explore the world of words with us!",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://findwords.co/about-us",
  },
};

export default function About() {
  return (
    <section className={styles["about-us"]}>
      <h1>About FindWords.co</h1>

      <div className="content">
        <p>Welcome to FindWords.co – Your Ultimate Word Resource!</p>

        <div className="section">
          <h2>Who We Are</h2>
          <p>
            At FindWords.co, we're passionate about words. Whether you're an
            avid crossword solver, a Scrabble enthusiast, or someone who simply
            loves playing with words, you're in the right place. We are a
            dedicated team of word lovers committed to providing you with a
            one-stop solution for all your word-related needs.
          </p>
        </div>

        <div className="section">
          <h2>What We Offer</h2>
          <p>
            Our platform is designed to make your word discovery experience
            seamless and enjoyable. Need help finding that perfect word for your
            Scrabble game? Looking for anagrams to challenge your brain? Want to
            explore new words and expand your vocabulary? FindWords.co has got
            you covered. Our extensive database is constantly updated to ensure
            you have access to the latest and most comprehensive word lists.
          </p>
        </div>

        <div className="section">
          <h2>Why Choose FindWords.co</h2>
          <ul>
            <li>
              <strong>Comprehensive Databases:</strong> We boast an extensive
              collection of words suitable for various word games, puzzles, and
              creative endeavors.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Our website is designed
              with you in mind. It's easy to navigate, ensuring a hassle-free
              experience every time you visit.
            </li>
            <li>
              <strong>Regular Updates:</strong> Stay ahead of the game with our
              regularly updated word lists, keeping you informed about the
              latest additions to the English language.
            </li>
            <li>
              <strong>Passionate Community:</strong> Join a community of word
              enthusiasts like yourself. Share tips, engage in discussions, and
              immerse yourself in the wonderful world of words.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission at FindWords.co is to be your go-to resource for all
            things related to words. We aim to foster a love for language,
            promote creativity, and make word discovery an enjoyable experience
            for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
