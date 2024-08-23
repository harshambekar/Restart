import createSlice from 'redux-toolkit'


const initialState = [{
    todos: {id:1, text:'hello ji'
    }
}]


export const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:Date.now(),
                text:action.payload
            }
            state.push(todo);

        },

        editto
    }
})

