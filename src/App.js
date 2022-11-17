import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from "./components/form";
import Info from "./components/personInfo";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
        <Navbar />
         <Routes>
            <Route path="/" element={<Form />}/>
            <Route path="personInfo" element={<Info/>}/>
         </Routes>
        </BrowserRouter>
    )
};

export default App;