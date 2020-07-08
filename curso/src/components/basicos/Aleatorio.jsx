import React from 'react'

export default (props) => {
    const { max, min } = props
    const conta = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div>
            <p>       Ecolhendo um número entre {max} e {min} :        {conta}            </p>


        </div>

    )


}


