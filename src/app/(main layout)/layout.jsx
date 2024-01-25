import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import styles from "./layout.module.css";

export const metadata = {
  title:
    "5 letter words finder | Wordle Solver | Unscrambler Words | Words with Friends Solver",
  description:
    "Find 5 letter words for Wordle, Words with Friends, Unscrambler, Scrabble Solver and more",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://findwords.co/",
  },
};

export default function layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </div>
  );
}
