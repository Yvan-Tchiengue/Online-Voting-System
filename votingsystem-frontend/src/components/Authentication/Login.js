import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/main.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Please enter both username and password.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                       className="input-field"/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)} className="input-field"/>
                <button type="submit" className="btn-primary">Login</button>
                <button type="button" onClick={handleRegisterRedirect} className="btn-secondary">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Login;