import styles from '../../styles/Articles.module.css';
import Article from './Article'

const Articles = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {articles.map((obj, index) => {
                return (
                    <Article
                        article={obj}
                        key={index}
                    />
                )
            })}
        </div>
    );
}

export default Articles;