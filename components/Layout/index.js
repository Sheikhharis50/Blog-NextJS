import styles from "../../styles/Layout.module.css";
import Nav from "../Nav";
import Meta from "../Meta";
import Header from "../Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getKeyVal } from "../../utils/Sessions";
import Loading from "../Common/Loading";

const Layout = ({ children, header = false }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = getKeyVal("userData");
    if (!u) {
      router.push("/login");
    }
    setUser(u);
  }, []);

  return (
    <>
      {user ? (
        <div>
          <Meta />
          <Nav />
          <div className={styles.container}>
            <main className={styles.main}>
              {header && <Header />}
              {children}
            </main>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Layout;
