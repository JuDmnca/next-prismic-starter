import styles from "../styles/layout/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Next Prismic Starter</Link>
      <div>
        <Link href="/games">
          <a className={styles.header__link}>Games</a>
        </Link>
        <Link href="/posts">
          <a className={styles.header__link}>Posts</a>
        </Link>
      </div>
    </header>
  );
}
