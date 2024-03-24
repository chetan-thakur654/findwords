import styles from "./contactUs.module.css";
export const metadata = {
  title: "Contact us | WordFinder.in",
  description:
    "Get in touch with WordFinder.in, Have questions or suggestions? Reach out through email or visit us. We're here to help!",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://wordfinder.in/contact-us",
  },
};
export default function Contact() {
  return (
    <section className={styles["contact-us"]}>
      <h1>Contact WordFinder.in</h1>

      <div className="content">
        <p>
          Have questions, suggestions, or just want to get in touch with us?
          We'd love to hear from you!
        </p>

        <div className="section">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us through the following channels:</p>
          <ul>
            <li>
              Email: <a href="mailto:info@wordfinder.in">info@wordfinder.in</a>
            </li>
            {/* Add more contact details as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}
