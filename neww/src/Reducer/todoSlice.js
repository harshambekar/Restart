import {createSlice} from 'redux-toolkit'

const initialState=[{
    id:1,
    text:'hllo'

}]


export const todoReducer=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            text=action.payload

        },
        editTodo:(state,action)=>{
            
        }

    }

})
