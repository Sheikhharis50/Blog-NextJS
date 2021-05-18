import styles from '../../styles/Layout.module.css';
import Meta from '../Meta';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
}

export default AuthLayout;