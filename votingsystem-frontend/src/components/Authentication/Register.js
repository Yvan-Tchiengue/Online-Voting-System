import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/main.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Please fill out both fields.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', { username, password });
            setSuccessMessage('Registration successful! You can now login.');
            setErrorMessage('');
            // Optionnel : Rediriger après un certain délai ou un clic sur "OK" de l'alerte
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
            console.error(error);
        }
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleRegister} className="auth-form">
                <h2>Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                       className="input-field"/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)} className="input-field"/>
                <button type="submit" className="btn-primary">Register</button>
                <button type="button" onClick={handleBackToLogin} className="btn-secondary">
                    Back to Login
                </button>
            </form>
        </div>
    );
}

export default Register;