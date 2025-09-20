const Navbar = () => {
    return (
        <>
            <div className="navbar bg-blue-500 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">mYTodo</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2">
                       <a className="btn rounded-2xl" href="./">Home</a>
                       <a className="btn rounded-2xl" href="./">Your Task</a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar