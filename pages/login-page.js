// import styles from '../styles/styles.css'

import Link from "next/link"
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from "reactstrap"

function LoginPage() {
    return ( 
        <div className="background" style={{ minHeight: 100 + 'vh'}}>
            <main>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                    paddingTop: 15,
                }} >
                    <h4 style={{ fontFamily: "fantasy" }}>DAM</h4>
                    <h6 style={{ fontFamily: "initial", marginTop: -8 }}>Digital Assets Management</h6>
                </div>
                <div style={{
                    minHeight: 80 + 'vh',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'

                }}>

                    <Card style={{
                        padding: 10,
                        backgroundColor: '#D9D9D9'

                    }}>
                        <CardTitle tag='h3'>Login Form</CardTitle>
                        <CardBody
                            style={{}}>
                            <Form style={{}}>
                                
                                <FormGroup>
                                    <Input id="email " placeholder="Email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="password" placeholder="Password"></Input>
                                </FormGroup>
                                <FormGroup>
                                <Input type="checkbox" />
                                <Label check className="checkbox">
                                    Simpan Password
                                </Label>
                                <Link href='./' className="link">Lupa Password ?</Link>
                            </FormGroup>
                            <Button
                                color='secondary'
                                outline
                                style={{
                                    width: 300 + 'px',
                                    fontWeight: "bold",
                                    color: "black",
                                    marginTop: 30 + 'px'
                                }}>Login</Button>
                            <FormGroup>
                                <Label
                                    style={{
                                        width: 300,
                                        alignItems: "center",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        fontFamily: "initial"

                                    }}>Jika belum memiliki akun silahkan
                                    <Link href="/signup-page"> Daftar</Link>
                                </Label>
                            </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </div>

            </main>
           
        </div>
    )
}

export default LoginPage