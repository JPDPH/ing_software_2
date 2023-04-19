import BarraIniciar from "./BarraIniciar";
import React, { useEffect, useState } from "react"
import {UNSAFE_DataRouterStateContext, useNavigate } from "react-router-dom"

const usuarioC = ["alberto","123", "renato","321"]
const usuarioG = ["jesus","ola", "yaru","contra"]

const Sesion = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const loginOnClick = () => {
        let passw = document.getElementById("passwor").value;
        if(usuarioC.includes(passw) && usuarioC.includes(username)){
            navigate("/cliente")
        }else if(usuarioG.includes(username) && usuarioG.includes(passw)){
            navigate("/guia")
        }else{
            alert("No existe este usuario")
        }

    }
    console.log(username)

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