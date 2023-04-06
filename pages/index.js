import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.tsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bookmaker manager</title>
      </Head>
      <div className="nav">
        <Navbar />
      </div>
    </div>
  );
}
