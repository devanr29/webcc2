app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Logika login: contoh sederhana
    if (email === 'test@example.com' && password === 'password123') {
      res.json({ message: 'Login berhasil' });
    } else {
      res.status(401).json({ message: 'Login gagal' });
    }
  });
  