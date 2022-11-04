import Head from "next/head";
import Layout from "../../components/layout";
import Morpion from "../../components/games/morpion";

import styles from "../../styles/games/morpion.module.scss";

export default function Games() {
  return (
    <Layout>
      <section>
        <Head>
          <title>Games</title>
          <meta name="description" content="Play to this amazing games" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Morpion />
        </main>
      </section>
    </Layout>
  );
}
