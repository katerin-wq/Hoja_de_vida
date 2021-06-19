import React from 'react'
import '../utils/css/Todo.estilos.css'
import image2 from  '../utils/images/image2.png'
function Todo() {
    return (
        <div className="Container_Cabecera">
            <div className="ContainerText">
                <h1>Hola, soy</h1>
                <h3>Katerin Torres</h3>
                <h5>Estudiante de desarrollo web Front-End</h5>
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">Ver más</button>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
           <div class="modal-dialog" role="document">
               <div class="modal-content">
                    <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <p>Hola, mi nombre es Katerin Melissa Torres Salazar, tengo 17 años, actualmente soy estudiante del programa Técnico en Desarrollo
            web, en la institución kuepa, me considero una persona creativa y autodidacta, con rápido aprendizaje y disposición a cualquier 
            oportunidad tanto académica como laboral</p>
        </div>
        </div>
        </div>
        </div>
        </div>        
            <img  id="image1" src={image2} alt="Cargando..."  />
        </div>
    )
}

export default Todo
