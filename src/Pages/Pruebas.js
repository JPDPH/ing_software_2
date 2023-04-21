import BarraNavega from "./BarraNavega";
import FormularioCantidad from "./FormularioCantidad";
import React, { useState } from "react";
import Lista from "./ListaViajes";

const Pruebas = () => {
    const lis = [{v:"Tumbes", c: "1", n:"Juan", a:"Diaz", nu:"987654321", vh:"Moto"},
        {v:"Piura", c: "2", n:"Carlos", a:"Ferrea", nu:"921232122", vh:"Carro"},
        {v:"Cajamarca", c: "3", n:"Maria", a:"Marcos", nu:"912736458", vh:"Camioneta"}];

    //datos seleccionados
    let selecti = []
    let final = lis

    //recibi data del hijo
    const datosRecibidos = (datos) => {
        let temp = Array(datos)
        for(let i= 0;i<temp.length;i++){
            selecti[i]=temp[i]
        }
        console.log(datos)
        comparar()
    }
    

    

    //compar lista
    const comparar = () => {
            let fin = []
            console.log(selecti)
            let lugAr =JSON.stringify(selecti[0])
            let perS =selecti[1]
            let vHc =selecti[2]
            console.log(lugAr)
            let verficar = lis.map(index=> index.v==lugAr[0] || index.c==lugAr[1] || index.vh==lugAr[2])
            console.log(verficar)

            for(let i = 0; i<lis.length;i++){
                let ver = selecti[i]
                for(let j = 0; j<lis.length;j++){
                    if(ver==lis[i][j]){
                        fin[i]=lis[i]
                    }
                }
            }
            final = fin
            
        
        
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