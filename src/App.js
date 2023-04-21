import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"

export default function App() {
  return (
     <Routes>
       <Route path="/" element={<Home/>}/>
       {/* <Route path="/ride" element={<Ride />}/>
       <Route path="/drive" element={<Drive />}/>
       <Route path="/fleet" element={<Fleet />}/> */}
       </Routes>
  );
}
