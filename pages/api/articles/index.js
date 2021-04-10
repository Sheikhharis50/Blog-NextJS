import prisma from '../../../services/prisma';

const fetchAllArticles = async () => {
    var payload = {
        status: true,
        message: 'Successful.'
    };

    try {
        payload['data'] = await prisma.article.findMany({
            orderBy: [
                { id: 'desc' }
            ]
        });
    } catch (error) {
        console.log(error);
        payload.status = false;
        payload.message = 'Something went wrong!'
    }

    return payload;
}

const createArticle = async ({ title, description }) => {
    var payload = {
        status: true,
        message: 'Added Successfully.'
    };
    var exc = false;

    try {
        var data = await prisma.article.findUnique({
            where: {
                title: title.toString()
            }
        });
        if (data) {
            exc = true;
            throw 'Title already exits!';
        }
        await prisma.article.create({
            data: {
                title: title.trim(),
                body: description.trim()
            }
        })
    } catch (error) {
        console.log(error);
        payload.status = false;
        payload.message = 'Something went wrong!'
        if (exc)
            payload.message = error.toString();
    }

    return payload;
}

export default async function handler(req, res) {

    var response = { status: false }

    if (req.method === 'GET') {
        response = await fetchAllArticles();
    }
    else if (req.method === 'POST') {
        response = await createArticle(req.body);
    }

    res.status(200).json(response);
}