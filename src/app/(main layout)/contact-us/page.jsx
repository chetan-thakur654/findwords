import styles from "./contactUs.module.css";
export const metadata = {
  title: "Contact us | FindWords.co",
  description:
    "Get in touch with FindWords.co. Have questions or suggestions? Reach out through email or visit us. We're here to help!",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://findwords.co/contact-us",
  },
};
export default function Contact() {
  return (
    <section className="contact-us">
      <h1>Contact FindWords.co</h1>

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
              Email: <a href="mailto:info@findwords.co">info@findwords.co</a>
            </li>
            {/* Add more contact details as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}
