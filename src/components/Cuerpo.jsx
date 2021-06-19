import React from 'react'
import '../utils/css/Cuerpo.estilos.css'
import image2 from  '../utils/images/barraCss.PNG'
import image3 from '../utils/images/barraHTML.PNG'
import image4 from '../utils/images/barraJs.PNG'
function Cuerpo() {
    return (
        <div className="Titulo">
            <br/>
            <p>Habilidades</p>
            <div className="Contenido">
            <h3>Javascript
            <br/><img  id="image1" src={image4} alt="Cargando..."  />10%</h3>
            <h3>HTML<br/><img  id="image1" src={image3} alt="Cargando..."  />70%</h3>
            <h3>Css<br/><img  id="image1" src={image2} alt="Cargando..."  />90%</h3>
            <br/>
            </div>
        </div>
        
    )
}

export default Cuerpo