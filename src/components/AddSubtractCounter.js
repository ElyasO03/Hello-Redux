import {useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actionTypes'

function AddSubtractCounter (props) {
    const [counter, setCounter] = useState('')

    const handleChange = (e) => {
        setCounter(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(counter))
    }

    const handleSubtract = () => {
        props.onSubtract(parseInt(counter))
    }

    return(
        <>
        <h1>Increment Decrement Counter</h1>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: value => dispatch({type: actionTypes.ADD, payload: value}),
        onSubtract: value => dispatch({type: actionTypes.SUBTRACT, payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter); 