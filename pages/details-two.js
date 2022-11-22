import Image from "next/image"
import Link from "next/link"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Form, FormGroup, Input, Row } from "reactstrap"

function DetailsTwo() {
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
                    // backgroundColor: 'black'

                }}>
                    <Card
                        style={{
                            backgroundColor: '#D9D9D9',
                        }}>
                        <CardHeader>
                            <CardTitle tag='h4'>Form Detail 2</CardTitle>
                            <CardText style={{ fontSize: 10 }}>Isi semua data dengan lengkap untuk melanjutkan prosesnya</CardText>
                        </CardHeader>
                        <CardBody style={{
                            display: "flex",
                            alignItems: 'center',
                        }}>
                            <Form>
                                <FormGroup>
                                    <Card style={{
                                        padding: 5,
                                        display: "flex",
                                    }}>
                                        <CardText tag='h5'>Foto KTP</CardText>
                                        {/* <Image src={"/../public/image/iconKtp.png"} height={100} width={100} alt={"apa"} priority={true}/> */}
                                        {/* <Image
                                            
                                            src={'/../public/image/iconKtp.png'}
                                            alt='iconKtp'
                                            priority={true}
                                            width={100}
                                            height={80}
                                            style={{
                                                marginBottom: 10,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                justifyItems: "center",
                                            }}
                                        /> */}
                                        <Input type="file"
                                            style={{
                                                justifyContent: "center",

                                            }}></Input>
                                    </Card>
                                    <Card style={{
                                        padding: 5,
                                        display: "flex",
                                        marginTop: 10,
                                    }}>
                                        <CardText tag='h5'>Selfie KTP</CardText>
                                        {/* <Image
                                            src={'/../public/image/selfieKtp.png'}
                                            alt="pppp"
                                            priority={true}
                                            width={100}
                                            height={80}
                                            style={{
                                                marginBottom: 10,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                justifyItems: "center",
                                            }}
                                        /> */}
                                        <Input type="file"
                                            style={{
                                                justifyContent: "center",

                                            }}></Input>
                                    </Card>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="NIK"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="" type="" placeholder="Nama sesuai KTP"></Input>
                                </FormGroup>
                                <Link href='/login-page'>
                                    <Button outline

                                        style={{
                                            borderRadius: 20,
                                            width: 40 + 'vh',
                                            justifyContent: "center",
                                            alignItems: "center",
                                            alignContent: "center",
                                            color: 'black'

                                        }}>Simpan</Button>
                                </Link>
                            </Form>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>

                </div>
            </main>
        </div>
    )
}

export default DetailsTwo