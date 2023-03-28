import { applyMiddleware, combineReducers, createStore } from 'redux'
import { BookReducer } from './Reducers/BookReducer'
import { LanguageReducer } from './Reducers/LanguageReducer'



const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
  language: LanguageReducer,
  book : BookReducer
})


const initialState = {
  language : [],
  book : []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;