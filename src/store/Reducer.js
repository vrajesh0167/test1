const initState = {
    counter: 0,
    price: 1000
}

const rootReducer = (state = initState, action) => {
    if (action.type === "inc") {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    } else if (action.type === "dec") {
        if (state.counter < 1 || state.counter < 2) {
            return {
                ...state,
                counter: 0
            }
        } else {
            return {
                ...state,
                counter: state.counter - action.value,
            }
        }
    } else {
        return state
    }
}

export default rootReducer;