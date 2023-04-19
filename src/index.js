import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
//import App from './App';
//paginas creadas
import Pruebas from './Pages/Pruebas';
import Sesion from './Pages/iniciar_sesion';
import PPrincipal from './Pages/PantallaPrincipal';
import PGuia from './Pages/PantallaGuia';
import reportWebVitals from './reportWebVitals';
import PPrincipal2 from './Pages/PantallaPrincipal2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PPrincipal />} />
        <Route path='/sesion' element={<Sesion />} />
        <Route path='/guia' element={<PGuia/>}/>
        <Route path='/cliente' element={<PPrincipal2/>}/>
        <Route path='/pruebas' element={<Pruebas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
