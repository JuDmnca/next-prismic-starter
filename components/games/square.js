import styles from "../../styles/games/morpion.module.scss";

export default function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={() => onClick()}>
      {value}
    </button>
  );
}
