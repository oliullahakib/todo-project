import './App.css'
import Main from './componets/Main/Main'
import Navbar  from './componets/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
function App() {
  

  return (
    <>
     <Navbar/> 
     <Main/>
     <ToastContainer position='top-center' />
    </>
  )
}

export default App
