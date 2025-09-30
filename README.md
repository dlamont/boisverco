# BoisVerco - Site Web avec Serveur Node.js

Un site web professionnel pour BoisVerco, spécialiste en produits et services du bois, avec serveur Node.js intégré.

## 📋 Description

BoisVerco est un site web moderne et responsive présentant les services et produits d'une entreprise spécialisée dans le travail du bois. Le site comprend des sections pour les services, produits, informations sur l'entreprise et contact, avec un serveur Node.js pour un développement et déploiement facilités.

## 🚀 Fonctionnalités

- **Design Responsive** : Compatible avec tous les appareils (desktop, tablette, mobile)
- **Navigation Smooth** : Défilement fluide entre les sections
- **Menu Mobile** : Menu hamburger pour les appareils mobiles
- **Animations** : Effets visuels au scroll et interactions
- **Serveur Node.js** : Serveur Express intégré pour le développement
- **Optimisé SEO** : Structure HTML sémantique et meta tags

## 📁 Structure du Projet

```
boisverco/
├── index.html          # Page principale
├── server.js           # Serveur Node.js Express
├── start-server.bat    # Script de démarrage Windows
├── package.json        # Configuration Node.js
├── package-lock.json   # Verrouillage des dépendances
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── script.js       # Scripts JavaScript
├── images/             # Dossier pour les images
├── assets/             # Ressources additionnelles
├── node_modules/       # Modules Node.js
└── README.md           # Documentation
```

## 🎨 Sections du Site

1. **Header/Navigation** : Menu de navigation fixe avec logo
2. **Hero Section** : Section d'accueil avec appel à l'action
3. **Services** : Présentation des services (Menuiserie, Charpenterie, Ébénisterie)
4. **Produits** : Gamme de produits (Bois massif, Panneaux, Quincaillerie)
5. **À Propos** : Information sur l'entreprise
6. **Contact** : Coordonnées de contact
7. **Footer** : Pied de page avec copyright

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec Flexbox et Grid
- **JavaScript ES6** : Interactivité et animations
- **Node.js** : Serveur backend
- **Express.js** : Framework web pour Node.js
- **Responsive Design** : Media queries pour l'adaptabilité

## 🚀 Comment Utiliser

### Méthode 1 : Serveur Node.js (Recommandée)

1. **Démarrage rapide** : Double-cliquez sur `start-server.bat`
2. **Ou en ligne de commande** :
   ```bash
   cd boisverco
   node server.js
   ```
3. **Accéder au site** : Ouvrez http://localhost:3000 dans votre navigateur

### Méthode 2 : Fichier HTML direct

1. **Ouvrir le site** : Double-cliquez sur `index.html`
2. **Limitation** : Certaines fonctionnalités peuvent ne pas fonctionner sans serveur

## 🔧 Installation et Configuration

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

### Installation
```bash
cd boisverco
npm install
```

### Démarrage du serveur
```bash
node server.js
```

Le serveur démarrera sur le port 3000 par défaut. Vous pouvez changer le port avec la variable d'environnement PORT :
```bash
PORT=8080 node server.js
```

## 🎯 Palette de Couleurs

- **Primaire** : #2c3e50 (Bleu foncé)
- **Secondaire** : #e67e22 (Orange)
- **Accent** : #8b4513 (Brun bois)
- **Accent 2** : #d2691e (Orange bois)
- **Texte** : #333333
- **Arrière-plan** : #f8f9fa

## 📱 Responsive Breakpoints

- **Desktop** : > 768px
- **Tablette** : 768px et moins
- **Mobile** : 480px et moins

## 📝 Personnalisation

### Modifier les Couleurs
Éditez les variables CSS dans `css/style.css` pour changer la palette de couleurs.

### Ajouter du Contenu
- Modifiez `index.html` pour changer le contenu
- Ajoutez des images dans le dossier `images/`
- Personnalisez les textes et informations de contact

### Fonctionnalités JavaScript
Le fichier `js/script.js` inclut :
- Navigation mobile
- Smooth scrolling
- Animations au scroll
- Effets de parallaxe
- Système de notifications

### Configuration du Serveur
Le fichier `server.js` peut être modifié pour :
- Ajouter de nouvelles routes
- Intégrer une API
- Configurer des middlewares
- Gérer des formulaires

## 🌐 Déploiement

### Déploiement local
Le serveur est prêt pour le développement local sur http://localhost:3000

### Déploiement en production
Pour déployer en production, vous pouvez utiliser :
- **Heroku** : Ajoutez un `Procfile` avec `web: node server.js`
- **Vercel** : Configuration automatique
- **Netlify** : Pour les fichiers statiques uniquement
- **VPS/Serveur dédié** : Utilisez PM2 pour la gestion des processus

## 🔧 Améliorations Futures

- [ ] Formulaire de contact fonctionnel avec backend
- [ ] Galerie d'images pour les réalisations
- [ ] Blog/actualités avec CMS
- [ ] Système de devis en ligne
- [ ] Intégration avec Google Maps
- [ ] API REST pour les données
- [ ] Base de données (MongoDB/PostgreSQL)
- [ ] Authentification utilisateur
- [ ] Panel d'administration
- [ ] Tests automatisés
- [ ] Optimisation des performances
- [ ] Tests cross-browser

## 📞 Support

Pour toute question ou assistance, contactez l'équipe de développement.

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés à BoisVerco.

---

**Version** : 2.0.0 (avec serveur Node.js)  
**Dernière mise à jour** : Septembre 2024  
**Développé avec** : ❤️, Node.js et du code propre
