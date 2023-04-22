import React, { useState, useEffect } from 'react';
import BarraNavega from "./BarraNavega";
import FormularioCantidad from './FormularioCantidad';




const PPrincipal = () => {

    const [listadoViajes, setListadoViajes]=useState([])

    const httpObtenerViajes = async () =>{
        const resp = await fetch("http://localhost:4444/carreras")
        const data = await resp.json()
        setListadoViajes(data)
    }

    useEffect(()=>{
        httpObtenerViajes()
    },[])

    return(
        <div>
            <BarraNavega></BarraNavega>
            <FormularioCantidad></FormularioCantidad>
            
        </div>


    );


}
export default PPrincipal;








