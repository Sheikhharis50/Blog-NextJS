import Head from 'next/head';

const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Meta.defaultProps = {
    title: 'NextJs-Tutorial'
}

export default Meta;