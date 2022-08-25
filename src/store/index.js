import {createStore} from 'redux';

const reducerFunction = (state = {counter: 0}, action) => {
    if(action.type==="INC" && parseInt(action.payload)){
        return {
            counter: state.counter+action.payload
        }
    }
    if(action.type==="DEC" && parseInt(action.payload)){
        return {
            counter: state.counter-action.payload
        }
    }
    if(action.type==="RESET") {
        return {
            counter: 0
        }
    }
    return state;
}

const store = createStore(reducerFunction);
export default store;