import styles from '../styles/Content.module.css';

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>A Simple bookmark manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites.Open a
          new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.buttons}>
          <button id={styles.chrome}>Get it on Chrome</button>
          <button id={styles.chrome}>Get it on Firefox</button>
        </div>
      </div>
    </div>
  );
}
