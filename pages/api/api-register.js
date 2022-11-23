import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiRegister = async (req, res) => {
    if (req.method == 'POST') {
        let body = JSON.parse(req.body)

        // let body = req.body
        // console.log(body)

        let regis = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                password: body.password,
            }
        })
        res.status(200).json(regis)
        // res.status(200).json(body)
        
    }
}

export default ApiRegister