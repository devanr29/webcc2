// backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Untuk parsing JSON body

// Rute untuk login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Logika login: contoh sederhana
    if (email === 'test@example.com' && password === 'password123') {
      res.json({ message: 'Login berhasil' });
    } else {
      res.status(401).json({ message: 'Login gagal' });
    }
});

// Rute API lainnya
app.get('/api/data', (req, res) => {
  res.json({ message: 'API Data' });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
