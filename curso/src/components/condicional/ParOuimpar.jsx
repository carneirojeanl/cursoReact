import React from 'react'


function numberData(numeros) {
    return { numeros }
}

const listagem = [
    numberData(2),
    numberData(17),
    numberData(27),
    numberData(95),
    numberData(2693),
    numberData(314),
    numberData(144000),
    numberData(1910),
    numberData(777),

];





export default (props) => {



    return (
        <div>
            {listagem.map((numero) => (
                <p> {numero.numeros % 2 === 0 ? `${numero.numeros} = Par`
                    : `${numero.numeros} = Ímpar`}
                </p>
            )



            )}
        </div>


    )

}
