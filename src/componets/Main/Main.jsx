import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo'
import { toast } from 'react-toastify'


const Main = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    useEffect(() => {
        let todosString = JSON.parse(localStorage.getItem('todos'));
        if (todosString) {
            setTodos(todosString)
        }
    }, [])

    const getFromLS = () => {
        const todosString = localStorage.getItem('todos')
        if (todosString) {
            const todosArr = JSON.parse(todosString)
            return todosArr
        }
        return []
    }

    const addToLS = (todo) => {
        const todosArr = getFromLS()
        const newTodosArr =[...todosArr,todo]
        localStorage.setItem("todos",JSON.stringify(newTodosArr))
    }
    const handleSave = () => {
        todo && setTodos([...todos, todo])
        console.log(todo)
        setTodo('')
        addToLS(todo)
        toast.success("Your Todo Is Added")
    }
    const handelChange = (e) => {
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
                    todos.map((item, index) => <Todo key={index} item={item} id={index} todo={[todo, setTodo]} todos={[todos, setTodos]} addToLS={addToLS} />)
                }
            </div>
        </div>
    )
}

export default Main