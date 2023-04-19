import "./css/style.css"
import React from "react";

const Lista = (props) => {
    
        <div>
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
        
    
}


export default Lista;