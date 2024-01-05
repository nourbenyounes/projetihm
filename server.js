// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200', // Update with your Angular app's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/projetweb', {

});

// Define MongoDB Schema and Model for Médecin
const medecinSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  address: String,
  contact: String,
});

const Medecin = mongoose.model('Medecin', medecinSchema);

// API endpoint to get all Médecins
app.get('/api/medecins', async (req, res) => {
  try {
    const medecins = await Medecin.find();
    res.json(medecins);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add a new medecin
app.post('/api/medecins', async (req, res) => {
  console.log('Received request body:', req.body);

  try {
    const { id, name, speciality, address, contact } = req.body;

    if (!name || !speciality || !address || !contact) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMedecin = {
      id,
      name,
      speciality,
      address,
      contact,
    };

    const addedMedecin = await Medecin.create(newMedecin);
    res.json(addedMedecin);
  } catch (error) {
    console.error('Error adding medecin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/medecins/:id', async (req, res) => {
  try {
    const medecin = await Medecin.findById(req.params.id);
    if (!medecin) {
      return res.status(404).json({ error: 'Medecin not found' });
    }
    res.json(medecin);
  } catch (error) {
    console.error('Error getting medecin by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Update a medecin by ID
app.put('/api/medecins/:id', async (req, res) => {
  try {
    const updatedMedecin = await Medecin.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated medecin
      runValidators: true, // Run validation on update
    });

    if (!updatedMedecin) {
      return res.status(404).json({ error: 'Medecin not found' });
    }

    res.json(updatedMedecin);
  } catch (error) {
    console.error('Error updating medecin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.delete('/api/medecins/:id', async (req, res) => {
  try {
    const deletedMedecin = await Medecin.findByIdAndDelete(req.params.id);

    if (!deletedMedecin) {
      return res.status(404).json({ error: 'Medecin not found' });
    }

    res.json({ message: 'Medecin deleted successfully' });
  } catch (error) {
    console.error('Error deleting medecin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.options('*', cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
