import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {completedTodo, deleteTodo, updateTodo} from "../features/todo/todoSlice"

const TodoItem = () => {
 const [editTodo,setEditTodo] = useState('');
 const [editId,setEditId] = useState(null);
 const todos =  useSelector(state=> state.todos);
 const dispatch = useDispatch();

 //when click update button 
 const handleEditButton=(todo)=>{
  setEditId(todo.id);
  setEditTodo(todo.title)

 }

 const saveEdit=(e)=>{
  e.preventDefault()
  dispatch(updateTodo({id: editId,title:editTodo}))
  setEditId(null);
  setEditTodo("")


 }
 
 

 

  return (

   <>
   <ul>
    {todos.map((todo)=>(
     <li key={todo.id}>
      {todo.id===editId? (<>
        <input type="text"
        value={editTodo} 
        onChange={(e)=>setEditTodo(e.target.value)}/>
        <button  className='border rounded m-2' onClick={saveEdit}> 💾 </button></>
        
      ):(<>
      {todo.title}
      <button 
      onClick={()=>handleEditButton(todo)} className='border rounded m-2' >✏️</button>
      <button className='border rounded m-2'
      onClick={()=> dispatch.deleteTodo(todo.id)} >❌</button>
      <input type="checkbox"
      checked={todo.completed}
      
       onChange={()=>dispatch(completedTodo(todo.id))}  />
       <span style={{
      textDecoration: todo.completed ? "line-through" : "none"
      }}></span>
      </>)}
     </li>
    ))}
   </ul>
   
   
   </>
  )
}

export default TodoItem
