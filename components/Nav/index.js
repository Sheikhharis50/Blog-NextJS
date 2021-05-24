import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { removeKey } from "../../utils/Sessions";

const Nav = () => {
  const logoutUser = () => {
    removeKey("userData");
    window.location.reload();
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <button title="Logout" onClick={logoutUser}>
            <LogoutIcon className="cursor-pointer" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
