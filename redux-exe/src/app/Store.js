import {configureStore} from 'redux-toolkit'
import todoReducer from '../reducers/todoReducer'
export default configureStore ({
    reducer:todoReducer

})