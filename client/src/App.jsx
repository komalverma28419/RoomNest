import Navbar from './components/Navnar'
import {Route, Routes, useLocation} from "react-router-dom"
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetail from './components/RoomDetail'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/rooms" element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
        </Routes>  
      </div>
      <Footer/>
    </div>
  )
}


export default App
