import styles from "../styles/layout/layout.module.scss";
import Header from "./header";
import Notifications from "./notifications";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {/* <Notifications type="success" message="Working great !" /> */}
      <main>{children}</main>
    </div>
  );
}
