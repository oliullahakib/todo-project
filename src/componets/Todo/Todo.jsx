import React from 'react'

const Todo = ({item,id,todos}) => {
    const handleDelete =(id)=>{
        let filterTodos = todos[0].filter((_,index)=>index!==id)
        todos[1](filterTodos);
    }
    return (
        <div className='todo flex justify-between w-1/4 items-center'>
            <div id={id} className='flex'>
                <input type="checkbox" className="checkbox checkbox-sm bg-black text-white" />
                <p>{item}</p>
            </div>
            <div className='flex'>
                <button className='btn btn-primary'>Edit</button>
                <button onClick={()=>{handleDelete(id)}} className='btn btn-primary ml-3 '>Delete</button>
            </div>
        </div>
    )
}

export default Todo