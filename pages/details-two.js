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
                <div style={{
                    flex: 1,
                }}>
                    <h1>DAM</h1>
                    <h5>Digital Assets Management</h5>
                </div>
                <div style={{
                    flex: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    justifyItems: "flex-end",
                    alignContent: "flex-end"

                }}>
                    <Card>
                        <CardHeader>Form Detail 2</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Card style={{
                                        padding:10
                                    }}>
                                        <Image
                                            src={'/../public/image/iconKtp.png'}
                                            width={130}
                                            height={80}
                                            style={{}}
                                        ></Image>
                                        <Input type="file">KTP</Input>
                                    </Card>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>footer</CardFooter>
                    </Card>

                </div>
            </main>
        </div>
    )
}

export default DetailsTwo