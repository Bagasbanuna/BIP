import Link from "next/link"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

function DetailsOne() {
    return (
        <div className="background">
            <main>
                <div style={{
                    display: "flex",
                    minHeight: 100 + 'vh',
                    justifyContent: "flex-end",
                    // textAlign: "center"
                }}>
                    {/* <div style={{
                        display:"flex",
                        minHeight: 100 +'vh',
                        justifyContent: "flex-start"
                    }}>
                        <div>DAM</div>
                    </div> */}
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
                                    <Input id="namaDepan" type="text" placeholder="Nama Depan"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="namaBelakang" type="text" placeholder="Nama Belakang"></Input>
                                </FormGroup>
                                <FormGroup >
                                    <Input id="tempatLahir" type="text" placeholder="Tempat Lahir"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md='4' style={{}}>
                                            <Button disabled style={{ backgroundColor: '#ffffff', color: 'black' }}>Tgl.Lahir</Button>
                                        </Col>
                                        <Col md='8'>
                                            <Input id="tanggalLahir" type="date"></Input>
                                        </Col>
                                    </Row>
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