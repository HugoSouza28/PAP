import { useEffect, useState } from 'react';
import React from "react";
import '../signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SigninForm = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [password2Value, setPassword2Value] = useState('');
    useEffect(()=>{

axios.get('http://localhost:3001/dados')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });
    })
    
    return (
        <div className="container">
            <h2 className="form-signup-heading">Registar</h2>
            <form className="form-signup" id="usersignup" name="usersignup" method="post" action="createuser.php">
                <div className="input-container">
                    <input name="newuser" id="newuser" type="text" className="form-control" placeholder="Username" autoFocus />
                </div>
                <div className="input-container">
                    <input name="email" id="email" type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="input-container">
                    <input name="password1" id="password1" type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="input-container">
                    <input name="password2" id="password2" type="password" className="form-control" placeholder="Confirmar Password" />
                </div>
                <div className="input-container">
                <button name="Submit" id="submit" className="btn btn-lg btn-primary btn-block" type="submit">Registar</button>
                </div>
                <div className="form-item">
                    <span className="left-text">Ainda não tem conta?</span>
                    <Link to="/login" className="form-link">Entrar</Link>
                </div>
            </form>
        </div>
    )
}
export default SigninForm;
