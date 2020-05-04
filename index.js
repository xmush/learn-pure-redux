const {createStore} = require('redux')

// initiating state
initalState = {
    chooseMentees : 'Yasin',
    points : 0,
    mentee : []
}

const reducer = (state = initalState, actions) => {
    if(actions.type === 'CHOOSE_AJAY') {
        return {
            ...state,
            chooseMentees : actions.mentee,
        }
    }
    if(actions.type === 'CHOOSE_BAGAS') {
        return {
            ...state,
            chooseMentees : actions.mentee,
        }
    }
}

// create new state
const chooseAjay = {
    type :  'CHOOSE_AJAY',
    mentee : 'Ajay'
}
const chooseBagas = {
    type :  'CHOOSE_BAGAS',
    mentee : 'Bagas'
}

// initiating store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch to connecting store with reducer
store.dispatch(chooseAjay)
store.dispatch(chooseBagas)