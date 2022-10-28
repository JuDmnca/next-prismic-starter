import Link from "next/link";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import styles from "../../styles/posts/posts.module.scss";

export default function Card({ post }) {
  return (
    <Link href={`/posts/${post.uid}`}>
      <a className={styles.card}>
        <PrismicNextImage field={post.data.cover} />
        <PrismicRichText field={post.data.title} />
        <p>Lire le post</p>
      </a>
    </Link>
  );
}
