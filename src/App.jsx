// import React from 'react';
import Home from "./components/Home"
import Login from "./components/Login"
import Chat from "./components/Chat";
import {
  BrowserRouter , Routes, Route,
} from 'react-router-dom';
function App() {


  return (
    <>
    <div className="container">
      {/* <Login /> */}
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>


    </div>
    </>
  )
}

export default App
