import { Container } from 'react-bootstrap';
import BarraIniciar from '../Barras/BarraIniciar'
import { useNavigate } from "react-router-dom"

const DiversificarRegistro = () => {

    const navigate = useNavigate()

    const turista = () => {
        navigate('/registro')
    }

    const guia = () => {
        navigate('/registroGuia')
    }

    return <Container>

        <BarraIniciar></BarraIniciar>
        <div>
        <div>
            <button onClick={turista}>Registrarse Como Turista</button>
        </div>
        <div>
            <button onClick={guia}>Registrarse Como Guia</button>
        </div>
        </div>
        


    </Container>

}

export default DiversificarRegistro;