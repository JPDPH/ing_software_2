import React, { useState } from 'react';
import BarraNavega from "./BarraNavega";
import Lista from "./ListaViajes";
//import FormularioCantidad from './FormularioCantidad';
import {Form, Button} from "react-bootstrap";




const FormularioCantidad = () => {
    const [lugar, setLugar] = useState("") ;
    const [cantP, setCantP] = useState("") ;
    const [tipoV, setTipoV] = useState("") ;

    const handleChangeL =(event) =>{
        setLugar(event.target.value);
    };

    const handleChangeP =(event) =>{
        setCantP(event.target.value);
    };

    const handleChangeV =(event) =>{
        setTipoV(event.target.value);
    };

    console.log(lugar)
    return(
        <div>
            <Form.Group className="mb-2">
                <Form.Label>Lugar Turistico</Form.Label>
                <Form.Select value={lugar} onChange={handleChangeL}>
                    <option value="">Elegir Destino</option>
                    <option value="Tumbes">Tumbes</option>
                    <option value="Cajamarca">Cajamarca</option>
                    <option value="Piura">Piura</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Cantidad de Personas</Form.Label>
                <Form.Select value={cantP} onChange={handleChangeP}>
                    <option value="">Elegir Cantidad de Personas</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Tipo de Vehiculo</Form.Label>
                <Form.Select value={tipoV} onChange={handleChangeV}>
                    <option>Elegir Vehiculo</option>
                    <option>Carro</option>
                    <option>Camioneta</option>
                    <option>Moto</option>
                </Form.Select>
            </Form.Group>
            <Button variant="warning">Filtrar</Button>
            
        </div>

    );
}

function ListaF(props){
    return(
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow">
                        <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow">
                        <h1 className="display-7">Viaja {props.lugar}</h1>
                        <h5>Informacion del Guia:</h5>
                        <p className="text-justify">
                            Nombre: {props.nombre}
                        </p>
                        <p className="text-justify">
                            Apellidos: {props.apellido}
                        </p>
                        <p className="text-justify">
                            Número: {props.numero}
                        </p>
                        <p className="text-justify">
                            Calificacion: ⭐⭐⭐⭐⭐
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 shadow">
                        <h1 className="display-7">Informacion del Servicio</h1>
                        <p className="text-justify">
                            El recorrido comienza de:
                        </p>
                        <p className="text-justify">
                            Punto A - Punto B - Punto C - Punto A - Punto B - Punto C - Punto A - Punto B - Punto C
                            Punto A - Punto B - Punto C - Punto B - Punto A - Punto B - Punto C - Punto A - Punto B
                        </p>
                        <p>Max. Cantidad de personas: {props.cantidad}</p>
                        <p>Tipo de Vehiculo: {props.vehiculo}</p>
                        <p>Horario: 07:00 a 18:00</p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

function PresentarLista(){
    
    const [total, setTotal] = useState([{v:"Tumbes", c: "1", n:"Juan", a:"Diaz", nu:"987654321", vh:"Moto"},
    {v:"Piura", c: "2", n:"Carlos", a:"Ferrea", nu:"921232122", vh:"Carro"},
    {v:"Cajamarca", c: "3", n:"Maria", a:"Marcos", nu:"912736458", vh:"Camioneta"}])
    return(
        <div>
            {
                    total.map(viaje =>{
                        return(
                            <ListaF 
                                lugar={viaje.v}
                                nombre={viaje.n}
                                apellido={viaje.a}
                                numero={viaje.nu}
                                cantidad={viaje.c}
                                vehiculo={viaje.vh}
                            ></ListaF>
                            
                        )
                        
                        
                    })
                }
        </div>
    )
}

const PPrincipal = () => {
    
    return(
        
        <div>
            <BarraNavega></BarraNavega>
            <div className="container">
                <FormularioCantidad></FormularioCantidad>
                <PresentarLista></PresentarLista>

            </div>
            
        </div>
    );

}

export default PPrincipal;