import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BarraIniciar from '../Barras/BarraIniciar'
//const usuarioC = ["alberto","123", "renato","321"]
//const usuarioG = ["jesus","ola", "yaru","contra"]


let sesionI = []

export function obtenerUsuario(){
    const data = sesionI
    return data;
}

const LoginPageGuia = () => {
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const navigate = useNavigate()
    
    
    function continuar (){
        navigate('/guia')
    }

    function registroG (){
        navigate('/registroGuia')
    }

    const httpguardarUsuario = async () => {
        const data = {
            correo: correo,
            contrasenia: contrasena,
        }

        try{
            const respons = await fetch(`http://localhost:4447/guiaSesion`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-Type" : "application/json"
                },
            });

            const responseData = await respons.json();
            console.log('Respuesta del backend:', responseData);
            if(responseData[0]!="null"){
                localStorage.setItem('guia', responseData[0]);
                continuar()
            }else{
                setCorreo("");
                setContrasena("");
                window.alert("No se encuentra ese usuario, por favor vuelva a intentarlo.");
                
            }
            
        }catch(error) {
            console.error('Error al enviar datos al backend:', error);
            // Realiza cualquier acción adicional en caso de error
            };
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
                        onClick = { httpguardarUsuario }>Login</Button>
                        <p></p>
                        <Button className='mt-3' variant='warning'
                        onClick = { registroG }>Crear cuenta</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
    </Row>
</Container>
}


export default LoginPageGuia