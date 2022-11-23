// import styles from '../styles/styles.css'

import Link from "next/link"
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from "reactstrap"
import { useState, useEffect } from 'react'


function LoginPage() {
    // const [data, setData] = useState("")
    // const [isLoading, setLoading] = useState(false)

    // email is value, setEmail untuk menampung value, useState untuk meload sesuatu secara realtime
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // useEffect digunkan saat mengecek data 
    useEffect(() => {
        // setLoading(true)

        // const body ={
        //     email: "",
        //     password: ""
        // }

        // fetch('/pages/api/create-user.js',{method: 'POST', body: body })
        // .then((res) => res.json())
        // .then((data =>{
        //     setData(data)
        //     setLoading(false)
        // }))

    }, [])

    // if (isLoading) return <p>Loading ..</p>
    // if (!data) return <p>No Profile</p>

    return (
        <div className="background" style={{ minHeight: 100 + 'vh' }}>
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
                                {email}
                                {password}
                                <FormGroup>
                                    <Input id="email" type="" placeholder="Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="password" type="" placeholder="Password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}></Input>
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
                                        marginTop: 30 + 'px',
                                        borderRadius: 20
                                    }}
                                    onClick={function () {
                                        const body = {
                                            email: email,
                                            password: password
                                        }
                                        // fetch sama seperti axios sebagai jembatan pengantar data ke  DB
                                        // buat api baru menggunakan login, karena create untuk daftar
                                        // fetch ngelink ke '/api/<nama file>'
                                        fetch('/api/api-login', { method: 'POST', body: JSON.stringify(body) })
                                            .then((res) => {
                                                // menggunkan try catch untuk mengecek jika suatu waktu terjadi error

                                                try {
                                                    res.json().then(val => {
                                                        console.log(val)
                                                    })
                                                } catch (error) {
                                                    res.text(res.text())
                                                }
                                            })
                                    }}
                                >Login</Button>
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