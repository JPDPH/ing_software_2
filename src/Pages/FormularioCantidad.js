import React from "react";
import {Form, Button} from "react-bootstrap";

const FormularioCantidad = () => {
    return(
        <div>
            <Form.Group className="mb-2">
                <Form.Label>Lugar Turistico</Form.Label>
                <Form.Select>
                    <option>Elegir Destino</option>
                    <option>Tumbes</option>
                    <option>Cajamarca</option>
                    <option>Piura</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Cantidad de Personas</Form.Label>
                <Form.Select>
                    <option>Elegir Cantidad de Personas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Tipo de Vehiculo</Form.Label>
                <Form.Select>
                    <option>Elegir Vehiculo</option>
                    <option>Carro</option>
                    <option>Camioneta</option>
                    <option>Moto</option>
                </Form.Select>
            </Form.Group>
            
            
        </div>

    );
}

export default FormularioCantidad;