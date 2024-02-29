import { useEffect, useState } from 'react';
import React from "react";
import '../style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
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
            <h2 className="form-signup-heading">Entrar</h2>
            <form className="form-signup" id="usersignup" name="usersignup" method="post" action="createuser.php">
                <div className="input-container">
                    <input name="myusername" id="myusername" type="text" className="form-control" placeholder="Username" autoFocus/>
                </div>
                <div className="input-container">
                    <input name="mypassword" id="mypassword" type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="input-container">
                <button name="Submit" id="submit" className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                </div>
                <div className="form-item">
                    <span className="left-text">Ainda não tem conta?</span>
                    <Link to="/signin" className="form-link">Registar</Link>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;