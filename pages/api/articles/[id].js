import prisma from '../../../prisma'

export default async function handler({ query: { id } }, res) {
    const article = await prisma.article.findUnique({
        where: {
            id: parseInt(id),
        },
    })
    res.status(200).json(
        article ?
            article :
            {
                message: `Article with the id of ${id} is not found`
            }
    );
}