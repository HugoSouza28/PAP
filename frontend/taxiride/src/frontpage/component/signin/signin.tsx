import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

const SigninForm = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [password2Value, setPassword2Value] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsernameValue(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    };

    const handlePassword2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword2Value(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Verificar se as senhas são iguais
        if (passwordValue !== password2Value) {
            alert("As senhas não coincidem!");
            return;
        }

        // Verificar se o email está no formato correto
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alert("O email não está em um formato válido!");
            return;
        }

        // Verificar se o username tem 1 letra maiúscula, 1 número e no mínimo 6 caracteres, sem espaços
        const usernameRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!usernameRegex.test(usernameValue)) {
            alert("O username deve conter pelo menos 1 letra maiúscula, 1 número e no mínimo 6 caracteres, sem espaços.");
            return;
        }

        try {
            // Enviar os valores para o backend
            await axios.post('http://localhost:3001/usuarios', {
                username: usernameValue,
                email: emailValue,
                password: passwordValue
            });

            // Limpar os campos do formulário após o envio bem-sucedido
            setUsernameValue('');
            setEmailValue('');
            setPasswordValue('');
            setPassword2Value('');

            // Definir o estado para indicar que o formulário foi enviado com sucesso
            setIsSubmitted(true);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            // Lidar com erros, como exibir uma mensagem de erro para o usuário
        }
    };

    return (
        <div className="container">
            <h2 className="form-signup-heading">Registar</h2>
            {!isSubmitted ? (
                <form className="form-signup" id="usersignup" name="usersignup" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input name="newuser" id="newuser" type="text" className="form-control" placeholder="Username" autoFocus onChange={handleUsernameChange} />
                    </div>
                    <div className="input-container">
                        <input name="email" id="email" type="text" className="form-control" placeholder="Email" onChange={handleEmailChange} />
                    </div>
                    <div className="input-container">
                        <input name="password1" id="password1" type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} />
                    </div>
                    <div className="input-container">
                        <input name="password2" id="password2" type="password" className="form-control" placeholder="Confirmar Password" onChange={handlePassword2Change} />
                    </div>
                    <div className="input-container">
                        <button name="Submit" id="submit" className="btn btn-lg btn-primary btn-block" type="submit">Registar</button>
                    </div>
                    <div className="form-item">
                        <span className="left-text">Ainda não tem conta?</span>
                        <Link to="/login" className="form-link">Entrar</Link>
                    </div>
                </form>
            ) : (
                <div>
                    <p>O formulário foi enviado com sucesso!</p>
                    <p><Link to="/login">Clique aqui para fazer login</Link></p>
                </div>
            )}
        </div>
    );
};

export default SigninForm;
