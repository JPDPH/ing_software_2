import BarraGuia from "./BarraGuia";
import Clientes from "./Clientes";
import React, { useState, useEffect } from 'react';
import {obtenerUsuario} from "./iniciar_sesion";

const PGuia = () =>{

    let usuarioActual= []
    usuarioActual =obtenerUsuario()
    console.log(usuarioActual)
    
   
    //lista de clientes 
    const [listadoClientes, setListadoClientes]=useState([])
    const [zona, setZona]=useState([])
    const [vehiculo, setVehiculo]=useState([])
    const [tour, setTuor] = useState([])

    const httpObtenerTour = async () =>{
        const resp = await fetch("http://localhost:4447/tour")
        const data = await resp.json()
        setTuor(data)
        

    }

    const httpObtenerClientes = async () =>{
        const resp = await fetch("http://localhost:4447/turista")
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
        httpObtenerClientes()
        httpObtenerZona()
        httpObtenerVehiculo()
        httpObtenerTour()
    },[])
    let listaInfoCliente = []
    console.log(listadoClientes)
    console.log(tour)
    
    let aux = 0
    for(let i = 0; i<tour.length; i++){
        if(tour[i].id_guia==usuarioActual[0].id){
            aux = i
        }
    }
    console.log(tour[aux])
    let aux4 = 0
    for(let i = 0; i<listadoClientes.length; i++){
        if(tour[aux].id_turista==listadoClientes[i].id){
            aux4 = i
        }
    }
listaInfoCliente[0] = {n:listadoClientes[aux4].nombre, 
        a:listadoClientes[aux4].apellido,
        nu:listadoClientes[aux4].telefono,
        }
    

    
    
    

    

    return(
        <div>
            <BarraGuia></BarraGuia>
            <div>
                {
                    listaInfoCliente.map (cliente => {
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