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
          &copy; {new Date().getFullYear()} FindWords.co
        </div>
        <ul className={styles.footerLinks}>
          <li>
            <Link href="#" className={styles.footerLink}>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.footerLink}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.footerLink}>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.footerLink}>
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
