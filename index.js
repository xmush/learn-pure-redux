const {createStore} = require('redux')

// initiating state
initalState = {
    chooseMentees : 'Yasin',
    points : 0,
    mentee : []
}

const reducer = (state = initalState, actions) => {
    if(actions.type === 'CHOOSE_MANTEE') {
        return {
            ...state,
            chooseMentees : actions.payload,
        }
    }
    if(actions.type === 'ADD_POINT') {
        return {
            ...state,
            points : actions.points,
        }
    }
}

// create new actions
const chooseMentee = (payload) => ({
    type : 'CHOOSE_MANTEE',
    payload
})

const addPoint = (points) => ({
    type : 'ADD_POINT',
    points
})

// initiating store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch to connecting store with reducer
store.dispatch(chooseMentee('bagas'))
store.dispatch(chooseMentee('Aji'))
store.dispatch(chooseMentee('Derby'))
store.dispatch(addPoint(4))
store.dispatch(addPoint(6))
store.dispatch(addPoint(3))
store.dispatch(addPoint(-4))
// store.dispatch(chooseBagas)

