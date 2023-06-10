import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
//import App from './App';
//paginas creadas
import Pruebas from './Pages/Pruebas';
import Sesion from './Pages/InicioSesion/iniciar_sesion';
import SesionGuia from './Pages/InicioSesion/iniciar_sesionGuia';
import PPrincipal from './Pages/PantallaPrincipal';
import PGuia from './Pages/GuiaTuristico/PantallaGuia';
import reportWebVitals from './reportWebVitals';
import PantallaInicial from './Pages/PantallaInicial';
import Diversificar from './Pages/InicioSesion/DiversificarSesion';
import DiversificarR from './Pages/InicioSesion/DiversificarRegistro';
import Registro from './Pages/InicioSesion/IngresarRegistro'
import RegistroGuia from './Pages/InicioSesion/IngresarRegistroGuia'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PantallaInicial />} />
        <Route path='/sesion' element={<Sesion />} />
        <Route path='/sesionGuia' element={<SesionGuia />} />
        <Route path='/guia' element={<PGuia/>}/>
        <Route path='/cliente' element={<PPrincipal/>}/>
        <Route path='/pruebas' element={<Pruebas />} />
        <Route path= '/registro' element={<Registro/>}/>
        <Route path= '/registroGuia' element={<RegistroGuia/>}/>
        <Route path= '/diversificar' element={<Diversificar/>}/>
        <Route path= '/diversificarR' element={<DiversificarR/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
