import styles from "../styles/layout/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Next Prismic Starter</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
