import React, { useEffect, useState } from 'react';
import { createEvent } from '../supabaseClient';
import InterventionItem from './InterventionItem';

export default function InterventionList() {
  const [interventions, setInterventions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInterventions = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/interventions', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setInterventions(data);
        console.log('Fetched interventions:', data);
      } catch (error) {
        console.error('Error fetching interventions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInterventions();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Electrical Interventions</h2>
      {interventions.length === 0 ? (
        <p>No interventions found.</p>
      ) : (
        <ul className="space-y-2">
          {interventions.map(intervention => (
            <InterventionItem key={intervention.id} intervention={intervention} setInterventions={setInterventions} />
          ))}
        </ul>
      )}
    </div>
  );
}