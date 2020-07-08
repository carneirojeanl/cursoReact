// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// const nomes = ["jean", "Lucas", "Carneiro"]

// class MyButton extends Component{   //o nome da class deve começar com letra maiúscula para dar certo//
//     render(){
//     return <button onClick = {()=> {this.props.handleClick(this.props.label)}} >{this.props.label}</button>
//     }
// }

// class MyLabel extends Component{
//   render(){
//   return <label> Vc clicou no: {this.props.paragraph}</label>
//   }
// }


// class App extends Component {

//   //para mudar o estado de um componente é necessário usar o constructor//
//   //depois de estruturar o constructor vc acessa o state do seu componente por ele e cria um state que vc vai codar//
//   constructor(props){
//     super(props);

//     this.state = {

//       labelText: '',

//     }


    
//   }

//   //agora vc criar uma funçao para poder mexer no estado que vc criou//

//   setLabelText = (labelText) => {
//     this.setState({labelText})
//   }

//   render(){
    
//     return (
//        <div>

//          <MyLabel paragraph = {this.state.labelText}/>
//           <br/>
//           <MyButton handleClick = {this.setLabelText} label = "Botão 1"/>
//           <MyButton handleClick = {this.setLabelText} label = "Botão 2"/>
//           <MyButton handleClick = {this.setLabelText} label = "Botão 3"/>
         
         

//        </div>
        
        
//     )
//   }


//   }

// export default App;

