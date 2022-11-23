import Link from "next/link"
import { useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

function DetailsOne() {

    const [namaDepan, setNamaDepan] = useState("")
    const [namaBelakang, setNamaBelakang] = useState("")
    const [tanggalLahir, setTanggalLahir] = useState("")

    return (
        <div className="background">
            <main style={{
                display: "flex",
                flexDirection: "row",
                minHeight: 100 + 'vh',
            }}>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        minHeight: 100 + 'vh',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}>
                    <h1 style={{ fontFamily: 'fantasy' }}>DAM</h1>
                    <h5 style={{ fontFamily: 'initial' }}>Digital Assets Management</h5>
                </div>
                <div style={{
                    flex: 0,
                    display: "flex",
                    justifyContent: "flex-end",
                    justifyItems: "flex-end",
                    alignContent: "flex-end",
                }}>

                    <Card style={{
                        backgroundColor: '#D9D9D9',
                        // minWidth: 30 + 'vw'
                    }}>
                        <CardHeader >
                            <CardTitle tag='h4'>Form Detail 1</CardTitle>
                            <CardText style={{ fontSize: 10 }}>Isi semua data dengan lengkap untuk melanjutkan prosesnya</CardText>
                        </CardHeader>

                        <CardBody style={{
                            display: "flex",
                            alignItems: "center",

                        }}>
                            <Form>
                                <FormGroup>
                                    <Input id="namaDepan" type="text" placeholder="Nama Depan"
                                    onChange={(e)=>{
                                        setNamaDepan(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="namaBelakang" type="text" placeholder="Nama Belakang"
                                    onChange={(e)=>{
                                        setNamaBelakang(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="tanggalLahir" type="datetime"
                                    onChange={(e)=>{
                                        setTanggalLahir(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup >
                                    <Input id="tempatLahir" type="text" placeholder="Tempat Lahir"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="Agama"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="Alamat"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="Jenis Kelamin"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="Status"></Input>
                                </FormGroup>
                                <Link href=
                                '/details-two'
                                >
                                    <Button outline

                                        style={{
                                            borderRadius: 20,
                                            width: 40 + 'vh',
                                            justifyContent: "center",
                                            alignItems: "center",
                                            alignContent: "center",
                                            color: 'black'

                                        }}
                                        onClick={()=>{
                                            const body = {
                                                namaDepan: namaDepan,
                                                namaBelakang: namaBelakang,
                                                tanggalLahir
                                            }

                                            fetch('/api/api-create-profile', {method: JSON.stringify()})
                                        }}>Simpan</Button>
                                </Link>
                            </Form>
                        </CardBody>
                        <CardFooter style={{
                            justifyContent: "flex-end",
                            display: "flex",
                            fontFamily: "initial"
                        }}>
                            <Link href='/details-two'>

                                Semua data telah terisi
                            </Link>
                            <Input style={{
                                marginLeft: 5,
                            }} type="checkbox">

                            </Input>
                        </CardFooter>
                    </Card>
                </div>


            </main>
        </div>
    )
}

export default DetailsOne