import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/main.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', { username, password });
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleRegister} className="auth-form">
                <h2>Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
                <button type="submit" className="btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;