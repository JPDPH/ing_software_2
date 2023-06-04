import BarraIniciar from "./BarraIniciar";
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const IngresarDatos = (props) =>{
    return(
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Ingresar datos personales</h4>
      <Form>

      <Form.Group>
          <Form.Label>Ingrese su nombre:</Form.Label>
          <Form.Control type="text" 
                        placeholder="nombre/s" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingrese su apellido:</Form.Label>
          <Form.Control type="text" 
                        placeholder="primer apellido" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingrese su DNI:</Form.Label>
          <Form.Control type="number" 
                        placeholder="DNI" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingrese su correo:</Form.Label>
          <Form.Control type="email" 
                        placeholder="correo personal" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingrese una contrasena:</Form.Label>
          <Form.Control type="email" 
                        placeholder="contrasena" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingrese su numero:</Form.Label>
          <Form.Control type="number" placeholder="numero de telefono" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Guardar cambios
        </Button>
      </Form>
    </div>
    );

}

export default IngresarDatos;