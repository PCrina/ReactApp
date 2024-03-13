import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
import Logo from "./Logo";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <Logo />
      <AppNav />
    </div>
  );
}
