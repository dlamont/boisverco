const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes pour les différentes sections (optionnel, pour SEO)
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/produits', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/a-propos', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware pour gérer les erreurs 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🌳 Serveur BoisVerco démarré sur http://localhost:${PORT}`);
    console.log(`📁 Serveur de fichiers statiques actif`);
    console.log(`🚀 Prêt à recevoir des connexions !`);
});

// Gestion gracieuse de l'arrêt du serveur
process.on('SIGINT', () => {
    console.log('\n🛑 Arrêt du serveur BoisVerco...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Arrêt du serveur BoisVerco...');
    process.exit(0);
});
