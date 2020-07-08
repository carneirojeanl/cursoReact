import './layout/App.css'
import React from 'react'

import If from './condicional/if'
import Parouimpar from './condicional/ParOuimpar'
import ListaProdutos from './repeticao/ListaProdutos'
import ListaAlunos from './repeticao/ListaAlunos'
import FamiliaMembro from './basicos/FamiliaMembro'
import Familia from './basicos/Familia'
import Card from './layout/Card'
import Primeiro from './basicos/Primeiro'
import ComParametro from './basicos/ComParametro'
import Aleatorio from './basicos/Aleatorio'


export default () => {
        return (


                <div className="App">
                        <div className="Cards">


                        <Card titulo = "Renderização Condicional" color = "#F35B09">
                                        <Parouimpar></Parouimpar>
                                        <If  Usuário = "Fernando"   ></If>
                                        <If ></If>
                                        
                                        
                               </Card>
                        <Card titulo = "Meu Bar" color = "#EEE118">
                                        <ListaProdutos></ListaProdutos>
                               </Card>

                               <Card titulo = "Lista de Alunos" color = "#000">
                                                <ListaAlunos></ListaAlunos>
                               </Card>
                                <Card titulo="Componente com Filho " color="#F34060">

                                        <Familia sobrenome="Carneiro">
                                                <FamiliaMembro nome='Jean '></FamiliaMembro>
                                                <FamiliaMembro nome='Alessandra ' ></FamiliaMembro>
                                                <FamiliaMembro nome='Lucas '></FamiliaMembro>
                                                <FamiliaMembro nome='Amanda '></FamiliaMembro>
                                                <FamiliaMembro nome='Ana Laura'></FamiliaMembro>

                                        </Familia>

                                </Card>


                                <Card titulo="Números Sorteados" color="#1CA3A9" >
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>
                                        <Aleatorio max={23} min={7}     >  </Aleatorio>




                                </Card>
                                <Card titulo="Notas dos Alunos" color='#0FD84F' >


                                        <ComParametro titulo='Nota do aluno'
                                                aluno='Jean'
                                                nota={5.8}
                                        />
                                        <ComParametro titulo='Nota do aluno'
                                                aluno='Maru'
                                                nota={9.7}
                                        />


                                </Card>
                                <Card titulo="Primeiro Componente" color="#F04A3F">

                                        <Primeiro />    <br />

                                </Card>











                        </div>

                </div>

        )

}