import React, { useState, useEffect } from 'react';
import BarraNavega2 from "./Barras/BarraNavega2";
import FormularioCantidad from './FormularioCantidad';
import ListaViajes from "./Datos/ListaViajes"



const PPrincipal = () => {
    const [listadoViajes, setListadoViajes]=useState([])
    const [datosRecividos, setDatosReciv]=useState([]) 

    const obtnerData = (datos) => {
        console.log(datos);
        setDatosReciv(datos) 
      };

    const httpObtenerViajes = async () =>{
      const data = {
        lugar : datosRecividos[0],
        precio : datosRecividos[1],
        tvehiculo : datosRecividos[2]
      } 
      const resp = await fetch(`http://localhost:4447/usuarios`,
        {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "content-Type" : "application/json"
            }
        }
      )
      const dataResp = await resp.json()
      console.log(dataResp)
      if (dataResp.error !== "") {
          console.error(dataResp.error)
      }
      //almacena la variable en 
      localStorage.setItem('turista', dataResp)
      setListadoViajes(dataResp)
        
    }

    useEffect(()=>{
        httpObtenerViajes()
    },[])

    return(
        <div>
            <BarraNavega2></BarraNavega2>
            <FormularioCantidad datosRecividos={obtnerData}></FormularioCantidad>
            <ListaViajes></ListaViajes>
        </div>


    );


}
export default PPrincipal;








