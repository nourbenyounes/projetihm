const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuration de CORS
const corsOptions = {
  origin: 'http://localhost:4200', // L'URL de ton app Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Utilisation de CORS avec les options définies
app.use(express.json()); // Pour parser les requêtes JSON

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/projetihm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Définition du schéma Mongoose pour les cours
const coursSchema = new mongoose.Schema({
  titre: String,
  description: String,
});

const Cours = mongoose.model('Cours', coursSchema);

// Route GET pour récupérer tous les cours
app.get('/api/cours', async (req, res) => {
  try {
    const cours = await Cours.find();
    res.json(cours);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des cours.' });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
