import React from 'react'
import NumOupt from '../component/numOutput'

const NumControls = ({result , plus , minus , mutiply , divide}) => (
    <div style={{ background: "wheat" }}>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={mutiply}>x</button>
        <button onClick={divide}>/</button>
        {result}
    </div>
)

export default NumControls