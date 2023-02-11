import React from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nav = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log("User created successfully:", user);
                nav('/')
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                style={{ padding: '0.5em', margin: '0.5em', fontSize: '1em' }} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                style={{ padding: '0.5em', margin: '0.5em', fontSize: '1em' }} 
            />
            <button type="submit" style={{ padding: '0.5em', margin: '0.5em', fontSize: '1em' }}>Sign up</button>
        </form>
    );
};

export default Register;
