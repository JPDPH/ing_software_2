import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Calificar = () => {
    
    const [calif, setCalif] = useState("")
    const navigater = useNavigate()

    const Enviar = () => {
        //NODO 0
        console.log(localStorage.getItem('servicio'))
        console.log(calif)
        //NODO 1
        if(calif>5 || /[a-zA-Z]/.test(calif)){
            //NODO 3
            window.alert("El valor debe ser igual o menor a 5 y no contener letras");
            setCalif("")
        }else{
            //NODO 2
            const enviar = {
                calf : calif,
                id: localStorage.getItem('servicio')
            }
            //NODO 4
            fetch(`http://localhost:4447/calificarG`,
                {
                    method : "POST",
                    body : JSON.stringify(enviar),
                    headers : {
                        "content-Type" : "application/json"
                    }
                }
            )//NODO 5
            .then(response => response.json())
            .then(reserva => {
            console.log('Respuesta del backend:', reserva);
            // Realiza cualquier acción adicional con la respuesta del backend
            localStorage.removeItem('servicio');
            navigater('/cliente')
            })//NODO 6
            .catch(error => {
            console.error('Error al enviar datos al backend:', error);
            // Realiza cualquier acción adicional en caso de error
            window.alert("ERROR");
            navigater('/cliente')
            });
            
        }
        //NODO 11

    }

    return <Container>
    <Row className='mt-4'>
        <Col></Col>
        <Col>
            <Card>
                <Card.Body>
                    <h2>Calificar</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Del 1 al 5: 
                            </Form.Label>
                            <Form.Control 
                            type='text'
                            value= { calif }
                            onChange = { (e) => setCalif(e.target.value) }/>
                        </Form.Group>
                        <Button className='mt-3' variant='warning'
                        onClick = { Enviar}>Enviar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
    </Row>
</Container>
}

export default Calificar;