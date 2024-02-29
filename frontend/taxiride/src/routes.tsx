import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from './frontpage/pages/frontpage';
import Login from './frontpage/pages/login';
import Signin from './frontpage/pages/signin';
import Reserva from './frontpage/pages/reserva';
import Reserva2 from './frontpage/pages/reserva2';

export const Rota:React.FC = ()=>{
    return(
        <Routes>
            <Route path="/home" element={<Frontpage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/reserva" element={<Reserva/>} />
            <Route path="/reserva" element={<Reserva/>} />
            <Route path="/reserva-2" element={<Reserva2/>} />
        </Routes>
    )
    
}
