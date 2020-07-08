   import React from 'react'
   
   export default   function primeiro(){


    const props = {
        text : 'oi, eu sou o text',
        msg : "seja bem vindo!"
    }
    
    return (
                <div>
                        <h2>   olá, primeiro componente"

                        </h2>

                        <p>   {props.msg}  </p>
                        <p>   {props.text}      </p>

                </div>
            


    )
    
         

}  

