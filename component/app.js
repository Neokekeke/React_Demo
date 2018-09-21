import React from 'react'
import Increase from '../container/increase.js'
import Result from '../container/result.js'

class App extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    render () {
        return (
            <div>
                <Increase></Increase>
                <Result></Result>
            </div>
        )
    }
}

export default App 