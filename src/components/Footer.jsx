import React from 'react'
import '../utils/css/Footer.estilos.css'
import image5 from '../utils/images/imagenfinal.png'
import image6 from '../utils/images/iconoWhatsApp.png'
import image7 from '../utils/images/iconoGmail.png'
const Footer = () => {
    return (
        <div className="Container_Footer">
            
            <div className="ContainerText1">
                <img  id="image1" src={image5} alt="Cargando..."  />
            </div>
            <div className="Formulario">
                <input type="text" placeholder="Nombre" id="nombre1" size="25" required></input>
                <br/><p></p>
                <input type="text" placeholder="Asunto" id="asunto" size="25" required></input><p></p>
                <textarea id="Comentario" rows="15" cols="25" placeholder="Escribe tu comentario"></textarea><p></p>
                <ul><ul></ul><ul><ul><button type="button" class="btn btn-light" data-target="#exampleModalLong"><a href="https://mail.google.com/mail/u/0/#inbox">Enviar</a></button></ul></ul></ul>
                <div className="redes">
                <img  id="image1" src={image6} alt="Cargando..."/>
                <h6><a href="https://api.whatsapp.com/send?phone=573102739318&text=Hola%20Katerin">+57 3102739318</a></h6>
                </div>
                <div className="redes2">
                <img  id="image1" src={image7} alt="Cargando..."/>
                <h6><a href="https://mail.google.com/mail/u/0/#inbox"> katerintorres949@gmail.com</a></h6>
        </div>
        </div>
        </div>
    )
}

export default Footer
