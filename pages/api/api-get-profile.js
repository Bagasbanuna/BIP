import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const ApiGetProfile = async (req, res) =>{
    const data = await prisma.profile.findMany()
    res.status(200).json(data)
}

export default ApiGetProfile