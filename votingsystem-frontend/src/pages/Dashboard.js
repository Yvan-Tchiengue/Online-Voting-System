import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

function Dashboard() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/candidates');
                // On s'assure que chaque candidat a une propriété `party` et `votes` (avec des valeurs par défaut si elles sont absentes)
                const candidatesWithDefaults = response.data.map(candidate => ({
                    ...candidate,
                    party: candidate.party || 'Unknown Party',  // Si `party` est manquant, on met une valeur par défaut
                    votes: candidate.votes !== undefined ? candidate.votes : 0 // Si `votes` est manquant, on initialise à 0
                }));
                setCandidates(candidatesWithDefaults);
            } catch (error) {
                console.error("Error fetching candidates:", error);
            }
        };

        fetchCandidates();
    }, []);

    const handleVote = async (id) => {
        try {
            await axios.post(`http://localhost:8080/api/candidates/vote/${id}`);
            alert('Vote recorded successfully!');
            // Met à jour localement le nombre de votes (optionnel mais pratique pour l'UI)
            setCandidates(candidates.map(candidate =>
                candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
            ));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <ul className="candidate-list">
                {candidates.map((candidate) => (
                    <li key={candidate.id} className="candidate-item">
                        {candidate.name} ({candidate.party}) - Votes: {candidate.votes}
                        <button onClick={() => handleVote(candidate.id)} className="btn-secondary">Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;