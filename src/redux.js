const redux = require('redux');

const createStore = redux.createStore();

const initState = {
    counter: 0,
};

const rootReducer = (state = initState, action) => {
    // let newState;
    // switch(action.type){
    //     case "IN_COUNTER" : {
    //         newState = {
    //             ...state,
    //             counter: state.counter + action.value,
    //         };
    //     }
    //         break;
    //     case "DE_COUNTER" : {
    //         newState = {
    //             ...state,
    //             counter: state.counter - action.value,
    //         };
    //     }
    //         break;
    //     default : 
    //         newState = state;
    //         break;
    // }
    // return newState;
    if (action.type === "IN_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value,
        };
    } else if (action.type === "DE_COUNTER") {
        return {
            ...state,
            counter: state.counter - action.value,
        };
    } else if (action.type === "RESEt") {
        return {
            ...state,
            counter: 0,
        };
    } else {
        return state;
    }
};

const store = createStore(rootReducer);

store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch({
    type: "IN_COUNTER",
    value: 4,
});
store.dispatch({
    type: "DE_COUNTER",
    value: 1,
});
store.dispatch({
    type: "RESEt",
    value: 0,
});

// console.log(store.getState())