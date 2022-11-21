import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const data = await prisma.user.findMany();
    res.status(200).json(data)
}

export default handler