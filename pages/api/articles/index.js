import prisma from '../../../prisma'

export default async function handler(req, res) {
    const articles = await prisma.article.findMany();
    res.status(200).json(articles);
}