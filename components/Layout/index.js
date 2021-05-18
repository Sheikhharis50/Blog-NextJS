import styles from "../../styles/Layout.module.css";
import Nav from "../Nav";
import Meta from "../Meta";
import Header from "../Header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getKeyVal } from "../../utils/Sessions";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const u = getKeyVal("userData");
    if (!u) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
