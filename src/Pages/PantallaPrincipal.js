import React, { useState, useEffect } from 'react';
import BarraNavega from "./BarraNavega";
import FormularioCantidad from './FormularioCantidad';
import axios from 'axios';



const PPrincipal = () => {

    const [listadoViajes, setListadoViajes]=useState([])
    const [datosRecividos, setDatosReciv]=useState([]) 

    const obtnerData = (datos) => {
        console.log(datos);
        setDatosReciv(datos) 
      };

    const httpObtenerViajes = async () =>{
        
        axios.post('http://localhost:4447/tour', datosRecividos)
      .then((response) => {
        console.log(response.data);
        setListadoViajes(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
        
    }

    useEffect(()=>{
        httpObtenerViajes()
    },[])

    return(
        <div>
            <BarraNavega></BarraNavega>
            <FormularioCantidad datosRecividos={obtnerData}></FormularioCantidad>
            
        </div>


    );


}
export default PPrincipal;








