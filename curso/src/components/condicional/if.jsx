import React from 'react'
import Condicao from './condicao'




export default (props) => {
    return (
        
        <div>
            <Condicao nome = {props.Usuário} >
            Seja bem vindo , {props.Usuário}
            </Condicao>
            
            
        </div>

    )

    
    
    
    
    

}