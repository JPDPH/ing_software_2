import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import BarraNavega2 from "./Barras/BarraNavega2";
import FormularioCantidad from './FormularioCantidad';
import { useNavigate } from "react-router-dom"

const Listviajes = ({item}) => {
  const [guiaRec, setguiaRec]=useState({}); 

  const navigater = useNavigate()

  useEffect(()=>{
    guia();
  },[])

  const reservar = () => {
    let turista = localStorage.getItem('turista');
    let tour = item.id;
    

    const reserva = {
      turista_id : turista,
      servicio_id : tour,
      nombre : "aa"
    }
    fetch(`http://localhost:4447/reserva`,
            {
                method : "POST",
                body : JSON.stringify(reserva),
                headers : {
                    "content-Type" : "application/json"
                }
            }
        )

        .then(response => response.json())
        .then(reserva => {
        console.log('Respuesta del backend:', reserva);
        // Realiza cualquier acción adicional con la respuesta del backend
        
        })
        .catch(error => {
        console.error('Error al enviar datos al backend:', error);
        // Realiza cualquier acción adicional en caso de error
        });
    }

  const guia = () => {
    let guiaId = item.id_guia
    const verificarGuia = {
      guia : guiaId,
    }
    fetch(`http://localhost:4447/infoturista`,
            {
                method : "POST",
                body : JSON.stringify(verificarGuia),
                headers : {
                    "content-Type" : "application/json"
                }
            }
        )

        .then(response => response.json())
        .then(reserva => {
        console.log('Respuesta del backend:', reserva);
        // Realiza cualquier acción adicional con la respuesta del backend
        setguiaRec(reserva)
        
        })
        .catch(error => {
        console.error('Error al enviar datos al backend:', error);
        // Realiza cualquier acción adicional en caso de error
        });

  }

  const calf = () => {
  localStorage.setItem('servicio', item.id)
  navigater('/calificar')

  }

  return (
    <div>
      <br></br>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow">
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" className="img-fluid" alt="Image" />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow">
                    <h1 className="display-7">Viaja {item.categoria}</h1>
                    <h5>Informacion del Guia:</h5>
                    <p className="text-justify">
                        Nombre: {guiaRec.nombre}
                    </p>
                    <p className="text-justify">
                        Apellidos: {guiaRec.apellido}
                    </p>
                    <p className="text-justify">
                        Número: {guiaRec.telefono}
                    </p>
                    <p className="text-justify">
                        Correo: {guiaRec.correo}
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 shadow">
                    <h1 className="display-7">Informacion del Servicio</h1>
                    <p className="text-justify">
                    <b>El recorrido comienza de:</b>
                    </p>
                    <p className="text-justify">
                      {item.estado}
                    </p>
                    <p> <b> Costo del servicio:</b> {item.monto} soles.</p>
                    <p> <b>Calificacion:</b>  {item.puntaje}</p>
                    <p> <b>Horario:</b>  Mañana</p>
                    <Button variant="warning" onClick={reservar}>Reservar</Button>
                     | 
                    <Button variant="warning" onClick={calf}>Calificar</Button>
                </div>
            </div>
            <br />
        </div>
    </div>
  )
}


const PPrincipal = () => {
    const [datosRecividos, setDatosReciv]=useState([]); 

    const navigate = useNavigate()

    useEffect(()=>{
      httpObtenerViajes();
      verificar()
    },[])

    const verificar = () => {
      if(localStorage.getItem('turista')==null){
        navigate('/')
      }
  }


    //elemento hijo
    
    const httpObtenerViajes = async () =>{
      try{
        const response = await fetch(`http://localhost:4447/servicio`);
        const jsonData = await response.json();
        setDatosReciv(jsonData)
      }catch(error){
        console.log('Error al solicitar al backend', error)
      }
        
    }

    
    console.log(datosRecividos)

    return(
        <div>
            <BarraNavega2></BarraNavega2>
            <FormularioCantidad datosRecividos={()=>{}}></FormularioCantidad>
            
            {
              datosRecividos.map((item)=>(
                <Listviajes key={item.id_guia} item={item}></Listviajes>
            ))}
            
            

        </div>


    );


}
export default PPrincipal;








