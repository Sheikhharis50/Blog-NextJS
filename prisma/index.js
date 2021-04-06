import { PrismaClient } from '@prisma/client';

class SinglePrisma {
    static instance = null;
    constructor() {
        throw new Error('Use SinglePrisma.getInstance()');
    }

    static getInstance() {
        if (!SinglePrisma.instance) {
            SinglePrisma.instance = new PrismaClient();
        }
        return SinglePrisma.instance;
    }
}

const SinglePrismaInstance = SinglePrisma.getInstance();

export default SinglePrismaInstance;

