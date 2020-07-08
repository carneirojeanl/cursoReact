import React from 'react'
export default function (props){

            const status = props.nota >= 8 ? "Aprovado" : "Reprovado"

    return(
        <div>
            <h1>
                {props.titulo}
            </h1>
            <p>
               O Aluno(a)  {props.aluno} tem nota {props.nota} 
               e foi {status}
            </p>
        </div>
    )
}

