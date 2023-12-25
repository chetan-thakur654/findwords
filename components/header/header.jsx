"use client";
import styles from "./header.module.css";
import Image from "next/image";
import findwords from "../../images/findwords.png";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    console.log("button clicked");
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.headerContainer}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.siteLogoLink}>
          <Image
            src={findwords}
            alt="Logo"
            width={150}
            height={40}
            // layout="fill"
            className={styles.siteLogo}
          />
        </Link>
        <button className={styles.hamburgerIcon} onClick={toggleNav}>
          <span className={`${isOpen && styles.firstLine}`}></span>
          <span className={`${isOpen && styles.secondLine}`}></span>
          <span className={`${isOpen && styles.thirdLine}`}></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen && styles.open}`}>
          <li>
            <Link href="/about-us" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className={styles.navLink}>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
