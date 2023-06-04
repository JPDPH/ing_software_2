import BarraIniciar from "./BarraIniciar";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//const usuarioC = ["alberto","123", "renato","321"]
//const usuarioG = ["jesus","ola", "yaru","contra"]

let sesionI = []

export function obtenerUsuario(){
    const data = sesionI
    return data;
}

const Sesion = (props) => {


    return(
        <div>
            <BarraIniciar></BarraIniciar>
            <div className="container">
                <div>
                    <h1>Iniciar Sesion</h1>
                    <div>
                        <label className="form-label">
                            Usuario
                        </label>
                        <input className="form-control" value={username} onChange={(evt)=>{setUsername(evt.target.value)}}/>
                    </div>
                    <div>
                        <label className="form-label" value={password} onChange={(evt)=>{setPassword(evt.target.value)}}>
                        Password
                        </label>
                        <input id="passwor" type="password" className="form-control"  />
                    </div>
                </div>
                <button className="btn btn-primary mt-2" type="button" onClick={loginOnClick}>Login</button>
                
            </div>
        </div>
    );

}

export default Sesion;