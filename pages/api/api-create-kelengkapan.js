import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiCreateKelengkapan = async (req, res) => {
    if (req.method == 'POST') {
        // let body = req.body
        // console.log(body)
        // res.status(200).json(body)

        let body = JSON.parse(req.body)
        console.log(body)
        res.status(200).json(body)

        // let lengkap = await prisma.kelengkapan.create({
        //     data: {
        //         ktp: body.ktp,
        //         selfie: body.selfie,
        //         nama: body.nama,
        //         nik: body.nik,
        //     }
        // })
        // res.status(200).json(lengkap)
    }
}

export default ApiCreateKelengkapan