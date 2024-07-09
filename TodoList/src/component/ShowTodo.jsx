import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo} from '../features/todoSlice.js';
import toast from 'react-hot-toast';

function ShowTodo() {
    
    const [input, setInput]=useState('');
    const [id, setId]=useState();
    const todos= useSelector(state=>state.todos);
    const dispatch=useDispatch();
    
    const handleEdit=(id, text)=>{
      document.getElementById('my_modal_3').showModal();
      setId(id);
      setInput(text);
    }

    const handleFrom=(event)=>{
      event.preventDefault();
      if(input.length===0){
        toast.error("Enter a task");
      }else{
      dispatch(updateTodo({id, input}));

      toast.success("updated");

      document.getElementById("my_modal_3").close();}
    }

    const handleInput=(event)=>{
      setInput(event.target.value);
      
      
      

      
    }
  return (
    <div className='mt-10 px-2 py-2'>{
        todos.map((todo)=><> <li key={todo.id} style={{width:"75%", marginLeft:"auto", marginRight:"auto"}} className='text-white mt-4 flex justify-between  list-none items-center bg-zinc-800 px-4 py-2 rounded '>{todo.text}
        <div> <button className='ml-2 lg:mr-5' onClick={()=>handleEdit(todo.id, todo.text)}><i className="fa-regular fa-pen-to-square fa-lg" style={{color: "#ffffff"}}></i></button> <button className='ml-2' onClick={()=>{dispatch(removeTodo(todo.id)); toast.success("removed")}}><i className="fa-solid fa-trash fa-lg" style={{color:"#ff4747"}}></i></button></div></li></>
        
      ) 
        }
          <div>
        
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className ="modal">
  <div className="modal-box text-black">
    <form method="dialog">

      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleFrom}>
    <h3 className="font-bold text-lg"></h3>
    <input type="text" placeholder='edit here' value={input} onChange={handleInput} className='input input-bordered input-info my-3  max-w-xs mr-1  w-md'/>
    <button type="submit" className='btn btn-accent ml-0 my-3'>Done</button>
    </form>
  </div>
</dialog>
    </div>
    </div>
  )
}

export default ShowTodo