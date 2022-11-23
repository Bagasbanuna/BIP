import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CreateUser = async (req, res) => {
   if (req.method == 'POST'){
    // untuk pengembalian data dari DB setelah dikirm melalur JSON.stringify(body)
    // let body = JSON.parse(req.body)
    let body = req.body

    let usr = await prisma.user.create({
        data: {
            username: body.username,
            email: body.email,
            password: body.password,
        }
    })

    res.status(200).json(body)
    // res.status(200).json(body) 
   }  
}

export default CreateUser