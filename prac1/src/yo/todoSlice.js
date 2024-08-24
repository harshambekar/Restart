import {createSlice} from 'redux-toolkit'

const initialState=
    [{
        id:1,
        text:'jio'
    }]


export const todoReducer=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            todos=action.payload

        }

    }
})


