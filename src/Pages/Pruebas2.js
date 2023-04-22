
import {Form, Button} from "react-bootstrap";
import React, { useState } from "react";

//añadir props
//añadir variables de estado y values onchange 
const Pruebas2 = (props) => {
    //lista original
    const lis = [{v:"Tumbes", c: "1", n:"Juan", a:"Diaz", nu:"987654321", vh:"Moto"},
        {v:"Tumbes", c: "1", n:"Pedro", a:"Martinez", nu:"932154321", vh:"Carro"},
        {v:"Piura", c: "2", n:"Carlos", a:"Ferrea", nu:"921232122", vh:"Carro"},
        {v:"Cajamarca", c: "3", n:"Maria", a:"Marcos", nu:"912736458", vh:"Camioneta"}
    ];
    let final = lis
    //----------------------------------------------------------
    const [lugar, setLugar] = useState("a") ;
    const [cantP, setCantP] = useState("a") ;
    const [tipoV, setTipoV] = useState("a") ;

    const handleChangeL =(event) =>{
        setLugar(event.target.value);
    };

    const handleChangeP =(event) =>{
        setCantP(event.target.value);
    };

    const handleChangeV =(event) =>{
        setTipoV(event.target.value);
    };
    
    const enviarData = () => {
        let lista = [lugar, cantP, tipoV];
        
        //comprobacion
        let fin = []
        let aux = 0
        let verficar = lis.map(index=> index.v==lista[0] || index.c==lista[1] || index.vh==lista[2])
            //console.log(verficar)//hasta aqui bien

        for(let i= 0; i<lista.length;i++ ){
            if(lista[i]=="a"){
                aux++ //verficado
            }
        }
        aux = 0
        if(verficar[0]==false && verficar[1]==false && verficar[2]==false || 
            aux==3)
            {
        }else{
            for(let i = 0; i<lis.length;i++){
                if(verficar[i]==true){
                    //console.log(aux)
                    fin[aux] = lis[i];
                    aux++;
                }
            }
            final=fin
        }
        //---------------------------------
        console.log(final)
        props.datosRecividos(final);
    }

    return(
        <div className="container">
            

            <Form.Group className="mb-2">
                <Form.Label>Lugar Turistico</Form.Label>
                <Form.Select value={lugar} onChange={handleChangeL}>
                    <option value="a">Elegir Destino</option>
                    <option value="Tumbes">Tumbes</option>
                    <option value="Cajamarca">Cajamarca</option>
                    <option value="Piura">Piura</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Cantidad de Personas</Form.Label>
                <Form.Select value={cantP} onChange={handleChangeP}>
                    <option value="a">Elegir Cantidad de Personas</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Tipo de Vehiculo</Form.Label>
                <Form.Select value={tipoV} onChange={handleChangeV}>                    
                    <option value="a">Elegir Vehiculo</option>
                    <option value="Carro">Carro</option>
                    <option value="Camioneta">Camioneta</option>
                    <option value="Moto">Moto</option>
                </Form.Select>
            </Form.Group>
            <Button variant="warning" onClick={enviarData}>Filtrar</Button>
            
        </div>

    );
}

export default Pruebas2;