import React from 'react'
import {Check,Trash2,Circle} from 'lucide-react'



function TodoItems({text, id, isComplete, deleteTodo,toggle}){
    const Icon = isComplete ? Check : Circle;
    return(
        <div className = 'flex items-center my-3 gap-2'>
            <div onClick ={()=>{toggle(id)}} className = 'flex flex-1 items-center cursor pointer p-2 '>
               
               <Icon className='w-7'/>
               <p className ={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through":""}`}>{text}</p>
            </div>

            
            <Trash2  onClick ={()=>{deleteTodo(id)}} className='w-4.5 cursor-pointer'/>

        </div>
    );
}

export default TodoItems