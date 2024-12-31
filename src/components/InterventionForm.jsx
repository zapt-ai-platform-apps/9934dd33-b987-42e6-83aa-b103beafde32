import React, { useState } from 'react';
import { createIntervention } from '../services/interventionService';

export default function InterventionForm({ setInterventions }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createIntervention({ title, description, assignedTo });
      setInterventions(prev => [...prev, data]);
      setTitle('');
      setDescription('');
      setAssignedTo('');
    } catch (error) {
      console.error('Error creating intervention:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="border p-4 rounded-md mb-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-2">Create New Intervention</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1 box-border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full border rounded px-2 py-1 box-border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Assign To (User ID)</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1 box-border"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Intervention'}
      </button>
    </form>
  );
}