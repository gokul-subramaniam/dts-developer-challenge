import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateStatus, deleteTask } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', status: 'pending', dueDate: '' });

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(form);
    setForm({ title: '', description: '', status: 'pending', dueDate: '' });
    loadTasks();
  };

  const handleStatusChange = async (id) => {
    const newStatus = prompt('Enter new status (pending, in_progress, completed):');
    if (newStatus) {
      await updateStatus(id, newStatus);
      loadTasks();
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <input placeholder="Due Date (YYYY-MM-DDTHH:MM)" value={form.dueDate} onChange={e => setForm({...form, dueDate: e.target.value})} required />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <strong>{t.title}</strong> [{t.status}] — Due: {t.dueDate}
            <button onClick={() => handleStatusChange(t.id)}>Update Status</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
