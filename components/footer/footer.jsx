import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          &copy; {new Date().getFullYear()} WordFinder.in
        </div>
        {/* <ul className={styles.footerLinks}>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=61555172695373"
              className={styles.footerLink}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/findwords.co/"
              className={styles.footerLink}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/find_words3650"
              className={styles.footerLink}
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="www.linkedin.com/in/findwords-co-0a71052a7"
              className={styles.footerLink}
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
