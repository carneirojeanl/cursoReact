import React, { cloneElement } from 'react'


export default (props) => {

    return (
        <div>

            {
                props.children.map((child) => {             //para cada componente filho eu chamo de 'child'. Para cada child acontece a function clone//
                    return cloneElement(child, props)
                })
            }

        </div>

    )

}