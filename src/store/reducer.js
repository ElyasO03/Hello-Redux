import * as actionTypes from './actions/actionTypes'

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD:
            return {
                ...state, 
                count: state.count + action.payload
            }
        case actionTypes.SUBTRACT:
            return {
                ...state, 
                count: state.count - action.payload
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }


    
    /* if(action.type === actionTypes.ADD) {
        return {
            ...state,
            count: state.count + action.payload
        }
    } else if(action.type === actionTypes.SUBTRACT) {
        return {
            ...state,
            count: state.count - action.payload
        }
    } else if(action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else if(action.type === actionTypes.DECREMENT) {
        return {
            ...state, 
            count: state.count - 1
        }
    }
    return state */
}

export default reducer 