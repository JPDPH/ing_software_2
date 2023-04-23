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

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usuarioC, setListaUsernameC] = useState([])

    const [usuarioG, setListaUsernameG] = useState([])
    //backend solicitar
    const httpObtenerUsernameC = async () =>{
        const resp = await fetch("http://localhost:4447/turista")
        const data = await resp.json()
        
        setListaUsernameC(data)
    }

    const httpObtenerUsernameG = async () =>{
        const resp = await fetch("http://localhost:4447/guia")
        const data = await resp.json()
        
        setListaUsernameG(data)
    }



    useEffect(()=>{
        httpObtenerUsernameC()
        httpObtenerUsernameG()

    },[])

    const navigate = useNavigate();

    

    const loginOnClick = () => {
        let passw = document.getElementById("passwor").value;
        console.log(passw)
        for(let i=0; i<usuarioC.length;i++){
            if(usuarioC[i].nombre ==username && usuarioC[i].contrasena ==passw){
                //sesionI[0] = {id : usuarioC[i].id, vehiculo: usuarioC[i].id_vehiculo }
                //props.recibirUsuario(sesionI)
                navigate("/cliente")
                
            }
        }
        for(let i=0; i<usuarioG.length;i++){
            if(usuarioG[i].nombre ==username && usuarioG[i].contrasena ==passw){
                sesionI[0] = {id : usuarioG[i].id, vehiculo: usuarioG[i].id_vehiculo }
                navigate("/guia")
                
            }
        }


    }
    

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