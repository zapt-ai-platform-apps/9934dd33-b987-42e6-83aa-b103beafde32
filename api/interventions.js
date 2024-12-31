import { interventions } from '../drizzle/schema.js';
import { authenticateUser } from "./_apiUtils.js";
import db from '../lib/db.js';
import { eq, set } from 'drizzle-orm';
import Sentry from '../lib/sentry.js';

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);

    if (req.method === 'GET') {
      const result = await db.select().from(interventions).where(eq(interventions.userId, user.id));
      res.status(200).json(result);
    } else if (req.method === 'POST') {
      const { title, description, assigned_to } = req.body;
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }
      const newIntervention = await db.insert(interventions).values({
        title,
        description,
        assignedTo: assigned_to || null,
        userId: user.id
      }).returning();
      res.status(201).json(newIntervention[0]);
    } else if (req.method === 'PUT') {
      const { id, title, description, status, assigned_to } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'Intervention ID is required' });
      }
      const updateData = {};
      if (title) updateData.title = title;
      if (description) updateData.description = description;
      if (status) updateData.status = status;
      if (assigned_to !== undefined) updateData.assignedTo = assigned_to;

      const updatedIntervention = await db.update(interventions)
        .set({ ...updateData, updatedAt: new Date() })
        .where(eq(interventions.id, id).and(eq(interventions.userId, user.id)))
        .returning();
      res.status(200).json(updatedIntervention[0]);
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'Intervention ID is required' });
      }
      await db.delete(interventions)
        .where(eq(interventions.id, id).and(eq(interventions.userId, user.id)));
      res.status(204).end();
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error:', error);
    if (error.message.includes('Authorization') || error.message.includes('token')) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}