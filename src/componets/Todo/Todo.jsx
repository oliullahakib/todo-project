import React from 'react'

const Todo = ({item,id,todos,todo,setToLS}) => {
    const handleDelete =(id)=>{
        let filterTodos = todos[0].filter((_,index)=>index!==id)
        todos[1](filterTodos);
        
    }
    const handleEdit =(id)=>{
        // set value 
        let findTodo = todos[0].find((_,index)=>index===id);
        todo[1](findTodo)
        // delete value
        let filterTodos = todos[0].filter((_,index)=>index!==id)
        todos[1](filterTodos);
        setToLS()
    }
    return (
        <div className='todo flex justify-between w-1/4 items-center'>
            <div id={id} className='flex items-center gap-1'>
                <input type="checkbox" className="checkbox checkbox-sm bg-black text-white" />
                <p>{item}</p>
            </div>
            <div className='flex'>
                <button onClick={()=>{handleEdit(id)}} className='btn btn-primary'>Edit</button>
                <button onClick={()=>{handleDelete(id)}} className='btn btn-primary ml-3 '>Delete</button>
            </div>
        </div>
    )
}

export default Todo