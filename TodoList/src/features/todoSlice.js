import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState={
    todos:[{id:1, text:"Default Task"}]
}
export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
    addTodo:(state, action)=>{
        const todo={
          id:nanoid(),
          text:action.payload
        }
        state.todos.push(todo);
    },

    removeTodo:(state, action)=>{
     state.todos=state.todos.filter((todo)=>todo.id!=action.payload);
    },

    updateTodo:(state, action)=>{
        const {id, input}=action.payload;
        state.todos=state.todos.map((todo)=>{
            if(todo.id===id){
             todo.text=input
             return todo;
            }
            else{
                return todo;
            }
        })
    }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;

