import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BarraIniciar from '../Barras/BarraIniciar'


const Resgitro = () => {
    const [correo, setCorreo] = useState("")
    const [contra, setContra] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    
    const navigate = useNavigate()



    function iniciarSesion () {
        navigate('/sesion')
    }

    const httpguardarUsuario = () => {
        const data = {
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            telefono : telefono,
            contrasenia : contra,
        }
        fetch(`http://localhost:4447/turista`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-Type" : "application/json"
                }
            }
        )

        .then(response => response.json())
        .then(data => {
        console.log('Respuesta del backend:', data);
        // Realiza cualquier acción adicional con la respuesta del backend
        setCorreo("");
        setContra("");
        setNombre("");
        setApellido("");
        setTelefono("");
        window.alert("Tu resgistro fue satisfactorio, puedes iniciar sesion");
        iniciarSesion();
        })
        .catch(error => {
        console.error('Error al enviar datos al backend:', error);
        // Realiza cualquier acción adicional en caso de error
        });
        
    }
    /*
    const guardarUsuario = (correo , contra, nombre, apellido, telefono) => {console.log(
        `nombre: correo: ${correo} password: ${contra}`)
        httpguardarUsuario(correo , contra, nombre, apellido, telefono)
    }
    */

return <Container>
    <BarraIniciar></BarraIniciar>
    <Row className='mt-4'>
        <Col></Col>
        <Col>
            <Card>
                <Card.Body>
                    <h2>Registro</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Ingrese Nombre:
                            </Form.Label>
                            <Form.Control 
                            type='text'
                            value= { nombre }
                            onChange = { (e) => setNombre(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Ingrese Apellido:
                            </Form.Label>
                            <Form.Control type='text'
                            value= { apellido }
                            onChange = { (e) => setApellido(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Ingrese Correo:
                            </Form.Label>
                            <Form.Control type='email'
                            value= { correo }
                            onChange = { (e) => setCorreo(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Ingrese Telefono:
                            </Form.Label>
                            <Form.Control type='text'
                            value= { telefono }
                            onChange = { (e) => setTelefono(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Ingrese Password:
                            </Form.Label>
                            <Form.Control type='password'
                            value= { contra }
                            onChange = { (e) => setContra(e.target.value) }/>
                        </Form.Group>
                        <Button className='mt-3' variant='warning'
                        onClick = { httpguardarUsuario }>Crear cuenta</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
    </Row>
</Container>
}


export default Resgitro