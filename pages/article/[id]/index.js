// import { useRouter } from 'next/router';
import Link from 'next/link'
import { BASE_URL } from '../../../config';
import Meta from '../../../components/Meta';

const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query

    return (
        <>
            <Meta title={article.title} />
            <h1 className="shrink text-center">{article.title}</h1>
            <p className="shrink text-justify"> {article.body} </p>
            {'\n\n\n'}
            <Link href='/'>
                <a className="btn">
                    &larr; Go Back
                </a>
            </Link>
            <style jsx>
                {`
                    .shrink {
                        width: 70%;
                    }
                `}
            </style>
        </>
    );
}

export default article;

export const getStaticProps = async (context) => {

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`${BASE_URL}articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article: article
        }
    }
}

export const getStaticPaths = async () => {

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await fetch(`${BASE_URL}articles`)
    const articles = await res.json()

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false
    }
}
