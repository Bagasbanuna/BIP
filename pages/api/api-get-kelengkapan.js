import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const ApiGetKelengkapan = async (req, res)=> {
    const data = await prisma.kelengkapan.findMany()
    res.status(200).json(data)

}

export default ApiGetKelengkapan