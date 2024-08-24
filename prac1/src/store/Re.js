import {configureStore} from 'redux-toolkit'
import{todoReducer}from '../yo/todoSlice'

export default configureStore({
    reducer:todoReducer
    

})