import Link from "next/link"
import { Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input } from "reactstrap"
import {useState} from 'react'

function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")


    return (
        <div className="container-signup">
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
                        <CardTitle tag='h5'>Sign-up Form</CardTitle>
                        <CardBody
                            style={{}}>
                            <Form style={{}}>
                                <FormGroup>
                                    <Input id="username" type="username" placeholder="Username"
                                    onChange={(e)=>{
                                        setUsername(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="email" type="email" placeholder="Email"
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="password" type="password" placeholder="Password"
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input id="phone" placeholder="Phone Number"
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}></Input>
                                </FormGroup>
                                <Link href=
                                '/details-one'
                                 style={{
                                    textDecorationLine: 'none'
                                }}>
                                    <Button outline
                                        style={{
                                            marginTop: 30,
                                            display: "flex",
                                            flexDirection: "row",
                                            color: 'black',
                                            width: 300 + 'px',
                                            borderRadius: 20,
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            
                                        }}
                                        onClick={()=>{
                                            
                                            const body = {
                                                username: username,
                                                email: email,
                                                password: password,
                                                phoneNumber: phoneNumber,
                                            }

                                            fetch('/api/api-register', {method: 'POST', body: JSON.stringify(body)})
                                            .then((res) =>{
                                                try {
                                                    res.json()
                                                    .then(val=>{
                                                        console.log(val)})
                                                } catch (error) {
                                                    res.text(res.text())
                                                }
                                            })
                                            
                                        }}>Sign Up</Button>
                                </Link>
                                <CardText
                                    style={{ fontFamily: "initial" }}>Jika sudah memiliki akun silahkan
                                    <Link href='/login-page'> Masuk</Link>
                                </CardText>
                            </Form>
                        </CardBody>
                    </Card>
                </div>

            </main>
        </div>

    )
}

export default SignUp