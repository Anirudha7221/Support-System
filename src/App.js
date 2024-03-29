import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";

function App(){
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;