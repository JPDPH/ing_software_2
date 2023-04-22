import BarraGuia from "./BarraGuia";
import Clientes from "./Clientes";

const PGuia = () =>{

    const [listadoClientes, setListadoClientes]=useState([])

    const httpObtenerClientes = async () =>{
        const resp = await fetch("http://localhost:4444/carreras")
        const data = await resp.json()
        setListadoClientes(data)
    }

    useEffect(()=>{
        httpObtenerClientes()
    },[])

    return(
        <div>
            <BarraGuia></BarraGuia>
            <div>
                {
                    listadoClientes.map (cliente => {
                        return(
                            <Clientes
                                lugar={cliente.v} 
                                nombre={cliente.n} 
                                apellido={cliente.a} 
                                numero={cliente.nu} 
                                cantidad={cliente.c} 
                            ></Clientes>
                        );
                    })
                }
            </div>
        </div>

    );

}

export default PGuia;