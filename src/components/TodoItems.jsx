import React from 'react'
import {Check} from 'lucide-react'

import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function TodoItems({text, id, isComplete, deleteTodo}){
    return(
        <div className = 'flex items-center my-3 gap-2'>
            <div className = 'flex flex-1 items-center cursor pointer p-2 '>
               
               <Check className='bg-orange-500 rounded-full'/>
               <p className ='text-slate-700 ml-4 text-[17px]'>{text}</p>
            </div>

            <img src ={delete_icon} alt="" className ='w-3.5 cursor-pointer'/>

        </div>
    );
}

export default TodoItems