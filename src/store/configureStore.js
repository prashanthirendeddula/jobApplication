import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import formsReducer from "../Reducers/application"
const configureStore=()=>{
   const store=createStore(combineReducers({
       forms:formsReducer

   }),applyMiddleware(thunk))
   return store
}
export default configureStore