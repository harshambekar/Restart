// importing the libaries
import{createContext,useContext} from "react"



// here we are creating context in which we are returning a object, 
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            text:'hello ji',
            completed:false,
        }
    ],  

    editTodo: (text,id)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
    addTodo:(text)=>{}


    
})    


// here we are giving the context of above context(TodoContext) nad exporting it
export const useTodo=()=>{
    return useContext(TodoContext)
}



// we have to export a provider
export const TodoProvider=TodoContext.Provider