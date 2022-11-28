import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ApiCreateProfile = async (req, res) => {
    if (req.method == 'POST') {

        let body = req.body
        console.log(body)
        res.status(200).json(body)

        // let body = JSON.parse(req.body)
        // console.log(body)

        // let prof = await prisma.profile.create({
        //     data: {
        //         namaDepan: body.namaDepan,
        //         namaBelakang: body.namaBelakang,
        //         // Date dari FE akan dirubah format nya di server jika di tambah new Date, dan masuk ke DB sesuai dengan format Prisma
        //         tanggalLahir: new Date(body.tanggalLahir),
        //     }
        // })
        // res.status(200).json(prof)
    }
}

export default ApiCreateProfile