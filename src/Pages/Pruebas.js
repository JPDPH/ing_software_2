import BarraNavega from "./BarraNavega";
import FormularioCantidad from "./FormularioCantidad";

const Pruebas = () => {
    const datosRecibidos = (datos) => {
        console.log(datos)
    }
    return (
        <div>
            <BarraNavega></BarraNavega>
            <FormularioCantidad datosRecividos={datosRecibidos}></FormularioCantidad>
        </div>
    )
}

export default Pruebas;