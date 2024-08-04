import React from "react";
import "./index.css";

type Styles = {
  container: string;
  header: string;
  h1: string;
  h2: string;
  paragraph: string;
  button: string;
  input: string;
  article: string;
};

const styles: Styles = {
  container: "max-w-4xl mx-auto p-8 bg-white",
  header: "border-b border-gray-200 py-6 mb-8",
  h1: "text-3xl font-light text-gray-800",
  h2: "text-2xl font-light text-gray-700 mb-4",
  paragraph: "mb-6 text-gray-600 leading-relaxed",
  button:
    "bg-black hover:bg-gray-800 text-white font-light py-2 px-4 rounded-full transition-colors duration-300",
  input:
    "w-full p-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 transition-colors duration-300 bg-transparent",
  article: "mb-12",
};

const ModernMinimalistDemo: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Tailwind CSS Style Fragmentation Demo</h1>
      </header>
      <main>
        <article className={styles.article}>
          <h2 className={styles.h2}>Elegant Simplicity</h2>
          <p className={styles.paragraph}>
            In minimalist design, every element matters. Simplicity is not only
            aesthetically pleasing but also enhances usability and user focus.
            This approach prioritizes content and functionality over unnecessary
            embellishments.
          </p>
          <button className={styles.button}>Explore</button>
        </article>
        <form className={styles.article}>
          <h2 className={styles.h2}>Contact Us</h2>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            className={`${styles.input} h-32 resize-none`}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default ModernMinimalistDemo;
