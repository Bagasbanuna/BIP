import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const GetUser = async (req, res) => {
    // setelah pilih DB. pilih kegunaannya .findMany atau findFirst(biasanya untuk login karena data nya di cari dulu)
    const data = await prisma.user.findFirst();
    res.status(200).json(data)
}

export default GetUser
