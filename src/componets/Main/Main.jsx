import React from 'react'

const Main = () => {
    return (
        <div className='container bg-blue-200 mx-auto text-black p-5 mt-5 rounded-xl'>
            <div className='add-todo'>
                <h1 className='text-2xl font-bold'>Add a Todo</h1>
                <div >
                    <input type="text" className="input text-white" />
                    <button className='btn btn-primary ml-3'>Save</button>
                </div>
            </div>
            <div className='todo-container space-y-3'>
                <div className='title mt-5'>
                    <h1 className='text-2xl font-bold'>Your Todos</h1>
                </div>
                <div className='todo flex justify-between w-1/4 items-center'>
                    <div className='flex'>
                        <p>go to school</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-primary ml-3 '>Delete</button>
                    </div>
                </div>
                <div className='todo flex justify-between w-1/4 items-center'>
                    <div className='flex'>
                        <p>go to school</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-primary ml-3 '>Delete</button>
                    </div>
                </div>
                <div className='todo flex justify-between w-1/4 items-center'>
                    <div className='flex'>
                        <p>go to school</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-primary ml-3 '>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main