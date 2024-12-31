import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Interventions from './pages/Interventions';

export default function App(){
    return (
        <Router>
            <div className="min-h-screen h-full">
                <Routes>
                    <Route path="/" element={<Interventions />} />
                </Routes>
            </div>
        </Router>
    )
}