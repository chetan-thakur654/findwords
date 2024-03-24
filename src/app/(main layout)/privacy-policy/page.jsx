import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy | WordFinder.in",
  description:
    "Explore WordFinder.in's commitment to your privacy. Learn how we handle your information securely and navigate our straightforward privacy policy. Your online privacy matters to us.",
  icons: {
    icon: "/icon.ico",
  },
  alternates: {
    canonical: "https://wordfinder.in/privacy-policy",
  },
};

export default function Privacy() {
  return (
    <section className="privacy-policy">
      <h1>Privacy Policy</h1>

      <div className="content">
        <p>
          Welcome to WordFinder.in! Your privacy is important to us, and we are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you use our
          website.
        </p>

        <div className="section">
          <h2>Information We Collect</h2>
          <p>
            When you visit WordFinder.in, we may collect certain information
            about your visit, such as your IP address, browser type, the pages
            you view, and the time and date of your visit. We do not collect
            personally identifiable information unless you voluntarily provide
            it to us, such as when using our contact form or subscribing to our
            newsletter.
          </p>
        </div>

        <div className="section">
          <h2>How We Use Your Information</h2>
          <p>
            The information we collect may be used to improve our website,
            personalize your experience, and respond to your inquiries. If you
            subscribe to our newsletter, we may use your email address to send
            you updates and relevant information.
          </p>
        </div>

        <div className="section">
          <h2>Third-Party Links</h2>
          <p>
            WordFinder.in may contain links to third-party websites. Please be
            aware that we are not responsible for the privacy practices of such
            sites. We encourage you to read the privacy policies of any
            third-party websites you visit.
          </p>
        </div>

        <div className="section">
          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your experience on WordFinder.in. You can
            control cookies through your browser settings. However, disabling
            cookies may limit your access to certain features of our website.
          </p>
        </div>

        <div className="section">
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access or disclosure. However, no data transmission
            over the internet can be guaranteed as completely secure. Please
            keep this in mind when providing personal information online.
          </p>
        </div>

        <div className="section">
          <h2>Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and the date of the last update will be
            indicated at the top of the policy.
          </p>
        </div>

        <div className="section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <a href="mailto:privacy@wordfinder.in">privacy@wordfinder.in</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
