// Login menggunakan komparasi == 'jngn lupa'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiLogin = async (req, res) => {
    if ( req.method == 'POST'){
        let body = req.body

        // let body = JSON.parse(req.body)
        let log = await prisma.user.findMany({
            where: {
                email: {
                    equals: body.email
                },
                password: {
                    equals: body.password
                }
            }
        })
        res.status(200).json(log)

        // res.status(log==null ? 200:201).json({
        //     success: log !=null,
        //     data: log,
        //     message: log == null? "pass salah":"login berhasil"
        // })
    }
    console.log(req.body)
}

export default ApiLogin