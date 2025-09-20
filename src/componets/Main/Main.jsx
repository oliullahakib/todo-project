import React,{useEffect, useState} from 'react'
import Todo from '../Todo/Todo'

const Main = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    useEffect(() => {
      let todosString = JSON.parse(localStorage.getItem('todos'));
     if(todosString){
        setTodos(todosString)
     }
    }, [])
    
    const setToLS=()=>{
        console.log(todos)
        let todosJS =JSON.stringify(todos) 
        localStorage.setItem("todos",todosJS)
    }
    const handleSave =()=>{
        todo &&  setTodos([...todos,todo])
        console.log(todos)
        setTodo('')
        setToLS()
    }
    const handelChange =(e)=>{
        setTodo(e.target.value)
    }
    return (
        <div className='container bg-blue-200 mx-auto text-black p-5 mt-5 rounded-xl min-h-96'>
            <div className='add-todo'>
                <h1 className='text-2xl font-bold'>Add a Todo</h1>
                <div >
                    <input type="text" value={todo} onChange={handelChange} className="input text-white" />
                    <button onClick={handleSave} className='btn btn-primary ml-3'>Save</button>
                </div>
            </div>
            <div className='todo-container space-y-3'>
                <div className='title mt-5'>
                    <h1 className='text-2xl font-bold'>Your Todos</h1>
                </div>
               {
                todos.map((item,index)=><Todo key={index} item ={item} id={index} todo={[todo,setTodo]} todos={[todos,setTodos]} setToLS={setToLS} />)
               }
            </div>
        </div>
    )
}

export default Main