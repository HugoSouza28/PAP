import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from './frontpage/pages/frontpage';
export const Rota:React.FC = ()=>{
    return(
        <Routes>
            <Route path="/home" element={<Frontpage/>} />
        </Routes>
    )
    
}
