import Articles from '../components/Articles';
import { BASE_URL } from '../config';
import Meta from '../components/Meta';

export default function Home({ articles }) {
  return (
    <div>
      <Meta title="Home" />
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
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
