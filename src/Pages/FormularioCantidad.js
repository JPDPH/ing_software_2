
import {Form, Button} from "react-bootstrap";
import React, { useState } from "react";


//añadir props
//añadir variables de estado y values onchange 
const FormularioCantidad = (props) => {
    const [lugar, setLugar] = useState("a") ;//puntaje
    const [cantP, setCantP] = useState("a") ;//categoria
    const [tipoV, setTipoV] = useState("a") ;//eliminar

    const handleChangeL =(event) =>{
        setLugar(event.target.value);
        console.log(lugar)
    };

    const handleChangeP =(event) =>{
        setCantP(event.target.value);
    };

    const handleChangeV =(event) =>{
        setTipoV(event.target.value);
    };
    
    const enviarData = () => {
        let lista = [lugar, cantP, tipoV];
        props.datosRecividos(lista);
    }
    
    /* Codigo eliminado
        linea 40
        <Form.Select value={lugar} onChange={handleChangeL}>
                    <option value="a">Elegir Destino</option>
                    <option value="Tumbes">Tumbes</option>
                    <option value="Cajamarca">Cajamarca</option>
                    <option value="Piura">Piura</option>
        </Form.Select>

        <Form.Select value={cantP} onChange={handleChangeP}>
                    <option value="a">Elegir Cantidad de Personas</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>

        <Form.Select value={tipoV} onChange={handleChangeV}>                    
                    <option value="a">Elegir Vehiculo</option>
                    <option value="Carro">Carro</option>
                    <option value="Camioneta">Camioneta</option>
                    <option value="Moto">Moto</option>
                </Form.Select>
    */

    return(
        <div className="container">
            

            <Form.Group className="mb-2">
                <Form.Label>Puntaje: </Form.Label>
                <Form.Control type='text' onChange = { handleChangeL }/>
            </Form.Group>
            
            <Form.Group className="mb-2">
                <Form.Label>Categoria: </Form.Label>
                <Form.Control type='text' onChange = { handleChangeP }/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Tipo de Vehiculo</Form.Label>
                <Form.Control type='text' onChange = { handleChangeV }/>
            </Form.Group>
            <Button variant="warning" onClick={enviarData}>Filtrar</Button>
            
        </div>

    );
}

export default FormularioCantidad;