
import React from 'react'


class Example extends React.Component {

    render () {
        const { value , increase } = this.props
        console.log("props",this.props.value)

        return (
            <div>
                <h2>{ value }</h2>
                <button onClick={ increase }>+</button>
            </div>
        )
    }
}

export default Example