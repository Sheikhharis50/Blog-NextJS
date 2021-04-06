import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>NextJS</span> tutorial
            </h1>
            <p className={styles.description}>
                Read Blogs as much as you like.
            </p>
            {/* <style jsx>
                {`
                    .title {
                        color: red
                    }
                `}
            </style> */}
        </div>
    );
}

export default Header;