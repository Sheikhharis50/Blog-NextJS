import styles from '../../styles/Articles.module.css';
import Link from 'next/link';

const Article = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`} >
            <a className={styles.card}>
                <h3>{article.title} &rarr; </h3>
                <p className="truncate"> {article.body} </p>
            </a>
        </Link>
    );
}

export default Article;