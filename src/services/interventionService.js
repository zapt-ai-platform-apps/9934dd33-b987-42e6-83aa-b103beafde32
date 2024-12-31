export async function createIntervention({ title, description, assignedTo }) {
  const response = await fetch('/api/interventions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ title, description, assigned_to: assignedTo || null })
  });
  const data = await response.json();
  if (response.status === 201) {
    return data;
  } else {
    throw new Error(data.message || 'Error creating intervention');
  }
}