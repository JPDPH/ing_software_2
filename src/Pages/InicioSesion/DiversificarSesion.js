import { Container } from 'react-bootstrap';
import BarraDiverSesion from '../Barras/BarraDiverSesion'
import { useNavigate } from 'react-router-dom';

const DiversificarSesion = () => {

    const navigate = useNavigate()

    const turista = () => {
        navigate('/sesion')
    }

    const guia = () => {
        navigate('/sesionGuia')
    }

    return <Container>

        <BarraDiverSesion></BarraDiverSesion>
        <div>
        <div>
            <button onClick={turista}>Iniciar Sesion Como Turista</button>
        </div>
        <div>
            <button onClick={guia}>Iniciar Sesion Como Guia</button>
        </div>
        </div>
        


    </Container>

}

export default DiversificarSesion;