import React from 'react'
import  '../utils/css/Todo.estilos.css'

function Title() {
    return (
        <div className="Container_title">
            <h6 id="principalTitle">
            <nav class="menu">
    		<ul>
    	        <li><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
				<li><a href="quienessomos.html"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Sobre mi  </a></li>
				<li><a href="portafolio.html"><i class="fa fa-puzzle-piece" aria-hidden="true"></i> Skills </a>
			</li>
				<li><a href="contacto.html"><i class="fa fa-envelope-o" aria-hidden="true"></i> Contacto</a></li>
			</ul>
		</nav>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                    <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <p>Hola, mi nombre es Katerin Melissa Torres Salazar, tengo 17 años,actualmente soy estudiante del programa Técnico en Desarrolloweb, en la institución kuepa. Me considero una persona creativa y con rápido aprendizaje y disposición a cualquier 
            oportunidad tanto académica como laboral</p>
        </div>
        </div>
        </div>
        </div>
            </h6>
        </div>
    )
}
export default Title