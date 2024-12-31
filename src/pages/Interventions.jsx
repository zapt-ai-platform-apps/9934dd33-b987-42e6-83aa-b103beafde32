import React from 'react';
import InterventionList from '../components/InterventionList';
import InterventionForm from '../components/InterventionForm';

export default function Interventions() {
  const [interventions, setInterventions] = React.useState([]);

  return (
    <div className="min-h-screen h-full flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Electrical Intervention Manager</h1>
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline">
          ZAPT Marketing
        </a>
      </header>
      <main className="flex-1 p-4">
        <InterventionForm setInterventions={setInterventions} />
        <InterventionList />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}