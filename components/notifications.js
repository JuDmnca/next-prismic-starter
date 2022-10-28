import cn from "classnames";
import styles from "../styles/layout/notifications.module.scss";

export default function Header({ message, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {message}
    </div>
  );
}
