import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">Features</Link>
      <Link href="/">Pricing</Link>
      <Link href="/">Contact</Link>
    </div>
  );
}
