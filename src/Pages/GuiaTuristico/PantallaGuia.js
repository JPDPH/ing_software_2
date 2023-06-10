import BarraGuia from "../Barras/BarraGuia";
import React, { useState, useEffect } from 'react';
import {obtenerUsuario} from "../InicioSesion/iniciar_sesion";



const Clientes = ({item}) =>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 shadow">
                        <h1 className="display-7">Viaja {item.nombre}</h1>
                        <h5>Informacion del Cliente:</h5>
                        <p className="text-justify">
                            Nombre: {item.nombre}
                        </p>
                        <p className="text-justify">
                            Apellidos: {item.apellido}
                        </p>
                        <p className="text-justify">
                            Número: {item.nombre}
                        </p>
                        <p className="text-justify">
                            Cantidad de Personas: {item.nombre}
                        </p>
                        <p className="text-justify"> 
                            Horario: 07:00 a 18:00
                        </p>
                    </div>
                </div>
                <br />

            </div>
        </div>
    );

}





const PGuia = () =>{

    const [clientes,setClientes] = useState([]);

    useEffect(()=>{
        obtenerClientes()
    },[])


    const obtenerClientes = async () => {
        try{
            const response = await fetch(`http://localhost:4447/turista`);
            const jsonData = await response.json();
            setClientes(jsonData)
          }catch(error){
            console.log('Error al solicitar al backend', error)
          }
    }

    return(
        <div>
            <BarraGuia></BarraGuia>
            {
                clientes.map((item)=>(
                    <Clientes key={item.telefono} item={item}></Clientes>
                ))
            }
        </div>

    );

}

export default PGuia;