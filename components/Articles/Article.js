import styles from "../../styles/Articles.module.css";
import Link from "next/link";
import Avatar from "../Common/Avatar";

const Article = ({ article }) => {
  return (
    <Link
      href={{
        pathname: "/article/[id]",
        query: { id: article.id },
      }}
    >
      <a className={styles.card}>
        <Avatar classes="my-2" size="m" />
        <h3>{article.title} &rarr; </h3>
        <p className="truncate"> {article.body} </p>
      </a>
    </Link>
  );
};

export default Article;
