import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 0.8rem 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1.2rem;
    }

    button[type="submit"] {
      background-color: var(--color-2);
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 0.8rem 1rem;
      margin: 1rem 0;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--color-3);
      }
    }
  }
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        console.log(localStorage.getItem('logged-in'));
        if (localStorage.getItem('logged-in') != undefined)
            navigate('homepage');
    }, [])
    
    const navToRegister = () => {
        navigate('register');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Login successful");
                navigate('/homepage');
                localStorage.setItem('logged-in', email);
            })
            .catch((error) => {
                console.error("Error logging in", error);
            });
    };

    return (
        <LoginWrapper>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <button onClick={navToRegister}>Navigate To Register</button>
            </form>
        </LoginWrapper>
    );
}

export default Login;
