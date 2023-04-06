import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import bookmarkLogo from '../utils/logo-bookmark.svg';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.bookmark}>
        <img src={bookmarkLogo} />
      </div>
      <div className={styles.navbar}>
        <Link href="/">FEATURES</Link>
        <Link href="/">PRICING</Link>
        <Link href="/">CONTACT</Link>
        <div className={styles.btn}>LOGIN</div>
      </div>
    </div>
  );
}
