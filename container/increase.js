
import React from 'react'
import { connect } from 'react-redux'
import Example from '../component/example.js'
import { increase } from './actions.js'


const mapStateToProps = (state , ownProps) => {
    return {
        value : state.count
    }
}

const mapDispatchProps = (dispatch , ownProps) => {
    return {
        increase : () => dispatch(increase())
    }
}

export default connect(mapStateToProps , mapDispatchProps)(Example)