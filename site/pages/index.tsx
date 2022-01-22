import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/common.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lerna Quick Start</title>
        <meta name="description" content="Lerna Quick Start" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Lerna Quick Start</span>
        </h1>

        <p className={styles.description}>Lerna Quick Start.</p>

        <div className={styles.grid}>
          <a href={'/playground/demo'} className={styles.card}>
            <h2>Playground &rarr;</h2>
            <p>Play it.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>For Developer.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
