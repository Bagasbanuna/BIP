import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const GetUser = async (req, res) => {
    const data = await prisma.user.findFirst();
    res.status(200).json(data)
}

export default GetUser
