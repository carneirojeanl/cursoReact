export default (props) =>{

        if(props.nome){
            return (props.children)
            
        } else {
            return ('Seja bem vindo, Amigo!')
        }
    
}