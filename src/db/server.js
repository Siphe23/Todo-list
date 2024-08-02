const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:'); 

db.serialize(() => {
  db.run('CREATE TABLE tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, priority TEXT)');
});

app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/tasks', (req, res) => {
  const { description, priority } = req.body;
  db.run('INSERT INTO tasks (description, priority) VALUES (?, ?)', [description, priority], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM tasks WHERE id = ?', id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(204).end();
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { description, priority } = req.body;
  db.run('UPDATE tasks SET description = ?, priority = ? WHERE id = ?', [description, priority, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ changes: this.changes });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
