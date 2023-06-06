import BarraNavega from "./Barras/BarraNavega";
import Pruebas2 from "./Pruebas2";
import React, { useState,useEffect  } from "react";
import Lista from "./Datos/ListaViajes";
import userEvent from "@testing-library/user-event";


const Pruebas = () => {
    //LISTA DE GUIAS
    const [listadoGuias, setListadoGuias]=useState([])

    const httpObtenerGuias = async () =>{
        const resp = await fetch("http://localhost:4444/carreras")
        const data = await resp.json()
        console.log(data)
        console.log(listadoGuias)
        setListadoGuias(data)
    }

    useEffect(()=>{
        httpObtenerGuias()
    },[])

    //------------------
    let selecti = []
    //recibi data del hijo
    const datosRecibidos = (datos) => {
        let selecti = []
        for(let i= 0;i<datos.length;i++){
            selecti[i]=datos[i]
        }
        console.log(selecti)//hasta aqui bien, son los 3 filtros

    }
    
    return (
        <div>
            <BarraNavega></BarraNavega>
            <Pruebas2 datosRecividos={datosRecibidos}></Pruebas2>
            {
                    
                    selecti.map (viaje => {
                        return(
                            <Lista
                                lugar={viaje.v} 
                                nombre={viaje.n} 
                                apellido={viaje.a} 
                                numero={viaje.nu} 
                                cantidad={viaje.c} 
                                vehiculo={viaje.vh} 
                            ></Lista>
                        );
                    })
                
            }
            
        </div>
    )
}

export default Pruebas;