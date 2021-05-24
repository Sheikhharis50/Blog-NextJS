import Link from "next/link";
import { BASE_URL } from "../../../config";
import Meta from "../../../components/Meta";
import Layout from "../../../components/Layout";

const shrinkContent = 60; // in percentage

const article = ({ article }) => {
  return (
    <Layout>
      <Meta title={article.title} />
      <h1 className="shrink text-center">{article.title}</h1>
      <p className="shrink text-justify"> {article.body} </p>
      {"\n\n\n"}
      <Link href="/">
        <a className="btn">&larr; Go Back</a>
      </Link>
      <style jsx>
        {`
          .shrink {
            width: ${shrinkContent}%;
          }
        `}
      </style>
    </Layout>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const res = await fetch(`${BASE_URL}articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article: article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}articles`);
  const { status, data } = await res.json();

  if (status) {
    const articles = data;
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
      paths,
      fallback: false,
    };
  }
};
