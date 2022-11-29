import { connect } from 'react-redux'
//import * as actionTypes from '../store/actions/actionTypes'
import * as actionCreators from '../store/creators/actionCreators'

function IncrementDecrementCounter (props) {

    const handleIncrement = () => {
        props.onIncrement()
    }
    
    const handleDecrement = () => {
        props.onDecrement()
    }

    return (
        <>
        <h1>Increment Decrement Counter</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(actionCreators.incrementCounter()),
        onDecrement: () => dispatch(actionCreators.decrementCounter())
    }
}


export default connect(null, mapDispatchToProps)(IncrementDecrementCounter);