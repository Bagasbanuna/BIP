import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiRegister = async (req, res) => {
    if (req.method == 'POST') {
        
        let body = req.body
        console.log(body)
        res.status(200).json(body)
        // let body = JSON.parse(req.body)

        // let regis = await prisma.user.create({
        //     data: {
        //         username: body.username,
        //         email: body.email,
        //         password: body.password,
        //         phoneNumber: body.phoneNumber,
        //     }
        // })
        // res.status(200).json(regis)
        
    }
}

export default ApiRegister