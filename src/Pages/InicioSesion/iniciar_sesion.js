import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BarraIniciar from '../Barras/BarraIniciar'
//const usuarioC = ["alberto","123", "renato","321"]
//const usuarioG = ["jesus","ola", "yaru","contra"]
import "../../Clases/cliente"


const LoginPage = () => {
    const [correos, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    

    const navigate = useNavigate()
    
    
    function navegar (){
        navigate('/registro')
    }

    function continuar(){
        navigate('/cliente')
    }


    const httpguardarUsuario = async () => {
        const data = {
            correo: correos,
            contrasenia: contrasena,
        }

        try{
            const respons = await fetch(`http://localhost:4447/turistaSesion`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-Type" : "application/json"
                },
            });

            const responseData = await respons.json();
            console.log('Respuesta del backend:', responseData);
            localStorage.setItem('turista', responseData[0])
            continuar()
        }catch(error) {
            console.error('Error al enviar datos al backend:', error);
            // Realiza cualquier acción adicional en caso de error
            };}

return <Container>
    <BarraIniciar></BarraIniciar>
    <Row className='mt-4'>
        <Col></Col>
        <Col>
            <Card>
                <Card.Body>
                    <h2>Login</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Correo
                            </Form.Label>
                            <Form.Control 
                            type='email'
                            value= { correos }
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
                        onClick = { httpguardarUsuario}>Login</Button>
                        
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