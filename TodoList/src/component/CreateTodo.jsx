import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { addTodo } from '../features/todoSlice.js';
import toast from "react-hot-toast";
function CreateTodo() {
    const [input, setInput]=useState('');
    const dispatch=useDispatch();
    const handleForm=(event)=>{
        event.preventDefault();
        if(input.length===0){
          toast.error("Enter task");
        }else{
        dispatch(addTodo(input));
        toast.success("Task Added");
        setInput('');}
    }
    const handleInput=(event)=>{
        setInput(event.target.value);
    }
  return (
    <div className='mt-20'>
    <h1 className='text-4xl text-white font-bold'>Todo List</h1>
    <form onSubmit={handleForm} className='mt-10'>
        <input type="text" placeholder='Enter task here' value={input} onChange={handleInput} className='input input-bordered input-info  max-w-xs mr-1 h-30 w-md'/>
        <button type='submit' className='btn btn-accent'>Add Task</button>
        

    </form>
    </div>
  )
}

export default CreateTodo