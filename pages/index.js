import Articles from '../components/Articles';
import AddArticle from '../components/Articles/AddArticle';
import { BASE_URL } from '../config';
import Meta from '../components/Meta';

export default function Home({ articles }) {
  return (
    <div>
      <Meta title="Home" />
      <AddArticle />
      <Articles
        articles={articles}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  // var limit = 6
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  const res = await fetch(`${BASE_URL}articles`);
  const { status, data } = await res.json();
  var articles = [];
  if (status) {
    articles = data;
  }
  return {
    props: {
      articles
    }
  }
}
