import Head from "next/head";

import Layout from "../../components/layout";
import Card from "../../components/posts/card";

import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";

import styles from "../../styles/posts/posts.module.scss";

export default function Posts({ page, posts }) {
  return (
    <Layout>
      <section className={styles.container}>
        <Head>
          <title>Posts</title>
          <meta name="description" content="Read all of my posts" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PrismicRichText field={page.data.title} />
        <div className={styles.grid}>
          {posts.map((post, index) => {
            return <Card key={index} post={post} />;
          })}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("posts");
  const posts = await client.getAllByType("post");

  return {
    props: {
      page,
      posts,
    },
  };
}
