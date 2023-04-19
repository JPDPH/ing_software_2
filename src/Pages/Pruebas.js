import BarraNavega from "./BarraNavega";
import FormularioCantidad from "./FormularioCantidad";
import React, { useState } from "react";
import Lista from "./ListaViajes";

const Pruebas = () => {
    const [lis, setLis] = useState([{v:"Tumbes", c: "1", n:"Juan", a:"Diaz", nu:"987654321", vh:"Moto"},
        {v:"Piura", c: "2", n:"Carlos", a:"Ferrea", nu:"921232122", vh:"Carro"},
        {v:"Cajamarca", c: "3", n:"Maria", a:"Marcos", nu:"912736458", vh:"Camioneta"}]);

    //datos seleccionados
    let selecti = []

    //recibi data del hijo
    const datosRecibidos = (datos) => {
        selecti = datos
        console.log(datos)
        comparar(selecti)
    }
    

    const [final, setFinal] = useState(lis)

    //compar lista
    const comparar = (selecti) => {
            let fin = []
            let aux = 0
            console.log(selecti)

            for(let i = 0; i<lis.length;i++){
                let ver = selecti[i]
                for(let j = 0; j<lis.length;j++){
                    if(ver==lis[i][j]){
                        fin[i]=lis[i]
                    }
                }
            }
            setFinal(fin)
            
        
        
    }

    
    return (
        <div>
            <BarraNavega></BarraNavega>
            <FormularioCantidad datosRecividos={datosRecibidos}></FormularioCantidad>
            {
                final.map (viaje => {
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