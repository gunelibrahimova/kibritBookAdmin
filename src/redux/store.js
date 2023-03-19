import { applyMiddleware, combineReducers, createStore } from 'redux'
import { LanguageReducer } from './Reducers/LanguageReducer'



const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
  language: LanguageReducer
})


const initialState = {
  language : []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;