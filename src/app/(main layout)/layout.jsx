import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import styles from "./layout.module.css";

export default function layout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        <main className={styles.layout}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
