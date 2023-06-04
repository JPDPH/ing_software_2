import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//const usuarioC = ["alberto","123", "renato","321"]
//const usuarioG = ["jesus","ola", "yaru","contra"]

let sesionI = []

export function obtenerUsuario(){
    const data = sesionI
    return data;
}

const LoginPage = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const navigate = useNavigate()
    
    
    function navegar (){
        navigate('/Login')
    }

    const httpguardarUsuario = async (nombre, apellido , correo , contrasena) => {
        const data = {
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            contrasena : contrasena

        }
        const resp = await fetch(`http://localhost:4447/usuarios`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-Type" : "application/json"
                }
            }
        )
        const dataResp = await resp.json()
        console.log(dataResp)
        if (dataResp.error !== "") {
            console.error(dataResp.error)
        }

        
    }
    const guardarUsuario = (nombre , apellido , correo , contrasena) => {console.log(
        `nombre: ${nombre} apellido: ${apellido} correo: ${correo} password: ${contrasena}`)
        httpguardarUsuario(nombre , apellido , correo , contrasena)
    }

   /*const httpLogin = async (correo, password) => {
        const resp = await fetch(` ${ RUTA_BACKEND}/login`, {
        method : "POST",
        body : JSON.stringify({
            correo: correo,
            contrasena : contrasena
        }),
        headers : {"Content-type": "application/json"
    }
    })
    const data = await resp.json()
     if(data.error === ""){
        //login fue correcto
        localStorage.setItem( "TOKEN" , data.token)
        navigate('/Principal')

     }else{
        //login fue incorrecto
     }
     */


return <Container>
    <Row className='mt-4'>
        <Col></Col>
        <Col>
            <Card>
                <Card.Body>
                    <h2>Login</h2>
                    <Image src={ `./imagenes/logo.png` }/>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Correo
                            </Form.Label>
                            <Form.Control 
                            type='email'
                            value= { correo }
                            onChange = { (e) => setCorreo(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password'
                            value= { contrasena }
                            onChange = { (e) => setContrasena(e.target.value) }/>
                        </Form.Group>
                        <Button className='mt-3' variant='warning'
                        onClick = { () =>{}}>Login</Button>
                        <p></p>
                        <Button className='mt-3' variant='warning'
                        onClick = { navegar }>Crear cuenta</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
    </Row>
</Container>
}


export default LoginPage