import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import {userReducer} from "./userReducer"

const rootReducer = combineReducers({
    form: formReducer,
    userReducer: userReducer
})

export default rootReducer
