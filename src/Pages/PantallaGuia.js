import BarraGuia from "./BarraGuia";
import Clientes from "./Clientes";
import React, { useState, useEffect } from 'react';

const PGuia = () =>{

    const [listadoClientes, setListadoClientes]=useState([])
    const [zona, setZona]=useState("")
    const [vehiculo, setVehiculo]=useState("")

    const httpObtenerClientes = async () =>{
        const resp = await fetch("http://localhost:4447/tour")
        const data = await resp.json()
        setListadoClientes(data)
    }

    const httpObtenerZona = async () =>{
        const resp = await fetch("http://localhost:4447/zona")
        const data = await resp.json()
        setZona(data)
    }

    const httpObtenerVehiculo = async () =>{
        const resp = await fetch("http://localhost:4447/vehiculo")
        const data = await resp.json()
        setVehiculo(data)
    }

    useEffect(()=>{
        httpObtenerClientes();
        httpObtenerZona();
        httpObtenerVehiculo()
    },[])

    return(
        <div>
            <BarraGuia></BarraGuia>
            <div>
                {
                    listadoClientes.map (cliente => {
                        return(
                            <Clientes
                                lugar={cliente.v} 
                                nombre={cliente.n} 
                                apellido={cliente.a} 
                                numero={cliente.nu} 
                                cantidad={cliente.c} 
                            ></Clientes>
                        );
                    })
                }
            </div>
        </div>

    );

}

export default PGuia;