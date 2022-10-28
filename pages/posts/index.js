import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";

import styles from "../../styles/post.module.scss";

export default function Posts() {
  return (
    <Layout>
      <section className={styles.container}>
        <Head>
          <title>Posts</title>
          <meta name="description" content="Read all of my posts" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Posts</h1>
        {/* <Image
          src="/images/july.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="July"
        /> */}
      </section>
    </Layout>
  );
}
