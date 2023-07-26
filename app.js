const express = require('express');
const app = express();
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
 
// Connect to the database
sequelize
  .sync()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Unable to connect to the database:', err));
 
// Middleware to parse incoming requests as JSON
app.use(express.json());
 
// Routes
app.use('/api', userRoutes);
 
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
