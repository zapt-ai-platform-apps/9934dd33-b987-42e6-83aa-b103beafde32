import React, { useState } from 'react';

export default function InterventionItem({ intervention, setInterventions }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this intervention?')) return;
    setIsDeleting(true);
    try {
      const response = await fetch('/api/interventions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ id: intervention.id })
      });
      if (response.status === 204) {
        setInterventions(prev => prev.filter(item => item.id !== intervention.id));
      } else {
        const errorData = await response.json();
        console.error('Error deleting intervention:', errorData);
      }
    } catch (error) {
      console.error('Error deleting intervention:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className="border p-4 rounded-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{intervention.title}</h3>
        <p className="text-sm text-gray-600">{intervention.description}</p>
        <p className="text-sm text-gray-500">Status: {intervention.status}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700 cursor-pointer"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}