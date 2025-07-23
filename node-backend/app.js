const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

let tasks = {};

app.post('/tasks', (req, res) => {
  const id = uuidv4();
  const { title, description, status, dueDate } = req.body;
  tasks[id] = { id, title, description, status, dueDate };
  res.status(201).json(tasks[id]);
});

app.get('/tasks', (req, res) => {
  res.json(Object.values(tasks));
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks[req.params.id];
  if (task) res.json(task);
  else res.status(404).send('Task not found');
});

app.put('/tasks/:id/status', (req, res) => {
  const task = tasks[req.params.id];
  if (task) {
    task.status = req.body.status;
    res.json(task);
  } else res.status(404).send('Task not found');
});

app.delete('/tasks/:id', (req, res) => {
  if (tasks[req.params.id]) {
    delete tasks[req.params.id];
    res.sendStatus(204);
  } else res.status(404).send('Task not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
