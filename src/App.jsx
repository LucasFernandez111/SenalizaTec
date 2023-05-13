import { useState } from "react";
import "./componentes/imagenes/img.css";
import { BtnInicio } from "./componentes/boton/boton.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className="box-inicio animate__animated animate__fadeInUp">
          <div className="init">
            <img src="/src/assets/logo.png" alt="" />
            <h1 className="title">Comenzamos</h1>
            <div className="botones">
              <BtnInicio name="INGRESAR" estilo="btn1-inicio" />
              <BtnInicio name="CREAR CUENTA" estilo="btn2-inicio" />
            </div>
          </div>
        </div>

      <div className="imagen-derecha ">
        <h1 className="info">
          ¡Aprende la lengua de señas Argentinas fácil y divertido!
        </h1>
        <img className="forma-svg  animate__animated animate__fadeInRight" src="/src/assets/fondo.svg" alt="" />
        <img className="imagen-2  animate__animated animate__fadeInRight" src="/src/assets/Imagen.png" alt="" />
      </div>
    </>
  );
}

export default App;
