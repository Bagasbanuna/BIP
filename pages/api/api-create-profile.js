import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiCreateProfile = async (req, res) => {
    if (req.method == 'POST'){
    // let body = req.body
    // console.log(body)

    // res.status(200).json(body)
    let body = req.body
    let prof = await prisma.profile.create({
        data: {
            namaDepan:body.namaDepan,
            namaBelakang: body.namaBelakang,
            tanggalLahir: body.tanggalLahir
        }
    })
    res.status(200).json(prof)
    }
}

export default ApiCreateProfile