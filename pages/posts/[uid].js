import Head from "next/head";

import Layout from "../../components/layout";

import { getAllPostIds, getPostData } from "../../lib/posts";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import styles from "../../styles/posts/post.module.scss";

export default function Post({ post }) {
  return (
    <Layout>
      <section className={styles.container}>
        <Head>
          <title>Post - {post.uid}</title>
          <meta name="description" content="Read all of my posts" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PrismicNextImage field={post.data.cover} />
        <PrismicRichText field={post.data.title} />
        <PrismicRichText field={post.data.description} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.uid);

  return {
    props: {
      post: post.post,
    },
  };
}
