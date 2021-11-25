import * as redux from 'redux';

export const increment = "increment";
export const decrement = "decrement";

const initialvalue = {
    count: false
} 

const reducer = (state = initialvalue,action) => {
    switch (action.type) {
        case increment: {
            return{...state,count: true}
        }
        case decrement: {
            return{...state,count: false}
        }
        default: {
            return state;
        }
    }
}

const vendors = {
    one: [
    {name: "Tan Ye Yean", work: "Plumbing Repair, Plumbing Installation, Electrical Wiring / Power Point"},
    {name: "Spick & Span Enterprise", work: "Refrigerator Repair, Commercial Refrigerator Servicing,"},
    {name: "Summato Engineering And Maintenance", work: "Plumbing Repair, Plumbing Installation, Electrical Wiring / Power Point"}
]
}

const tester = (state = vendors, action) => {
    return {
        ...state,
        name: state.one.name,
        
    }
}

// const rootreducer = (state = {},action) => {
//     return {
//         counter: reducer(state.counter,action),
//         testers: tester(state.testers,action),
//     }
// }

const rootreducer = redux.combineReducers({
    counter: reducer,
    testers: tester
})

const store = redux.createStore(rootreducer);

export default store;