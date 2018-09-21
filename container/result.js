
import React from 'react'
import NumControls from '../component/numControl.js'
import { plus, minus, multiply, divide, increase} from '../container/actions.js' 
import { connect } from 'react-redux'

// 把state当做props传过去
const mapStateToProps = (state , ownProps) => {
    return {
        result : state
    }
} 

// 把action当做props传过去
const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        plus : () => dispatch(plus()),
        minus : () => dispatch(minus()),
        mutiply : () => dispatch(mutiply()),
        divide : () => dispatch(divide())
    }
}

class Input extends React.Component{
    render () {
        const { dispatch } = this.props
        let input
        let init = 1

        return (<div>
            <input type="number" placeholder="请输入数字" ref={node => input = node} defaultValue={init}/>
            <div style={{ background: "wheat" }}>
                <button onClick={() => {dispatch(plus(input.value))}}>+</button>
                <button onClick={() => {dispatch(minus(input.value))}}>-</button>
                <button onClick={() => {dispatch(multiply(input.value))}}>x</button>
                <button onClick={() => {dispatch(divide(input.value))}}>/</button>
            </div>
            
        </div>)
    }
}


export default connect()(Input)