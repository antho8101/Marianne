# Marianne - IA Républicaine

Interface conversationnelle minimaliste centralisant les services publics français, conforme au Système de Design de l'État.

## 🎯 Objectif

Marianne propose une interface ultra-simple pour accéder à tous les services publics français via une conversation naturelle avec une IA. L'utilisateur se connecte via France Connect et peut effectuer ses démarches, obtenir des conseils, effectuer des paiements et prendre des rendez-vous.

## 🏗️ Architecture

### Structure des fichiers

```
Marianne/
├── index.html              # Page principale
├── styles/
│   ├── main.css           # Styles principaux DSFR
│   └── components.css     # Composants spécifiques
├── js/
│   └── app.js            # Logique JavaScript
├── assets/
│   ├── fonts/            # Polices Marianne
│   ├── Marianne_Logo.svg # Logo officiel
│   └── favicon.ico       # Favicon
└── README.md             # Documentation
```

### Technologies utilisées

- **HTML5** : Structure sémantique et accessibilité
- **CSS3** : Styles conformes au DSFR avec variables CSS
- **JavaScript ES6+** : Logique orientée objet
- **Polices Marianne** : Typographie officielle de l'État

## 🎨 Conformité DSFR

### Couleurs officielles
- **Bleu France** : `#000091` (couleur principale)
- **Rouge Marianne** : `#E1000F` (couleur d'accent)
- **Gris neutres** : Palette complète selon les tokens DSFR

### Espacement 8-point grid
- Système basé sur les multiples de 4px (2px, 4px, 8px, 12px, 16px, etc.)
- Classes utilitaires `.fr-mb-6v`, `.fr-mb-8v`, etc.

### Typographie
- **Police Marianne** : Typographie officielle de l'État
- **Hiérarchie** : H1 à H6 selon les standards DSFR
- **Tailles** : Responsive selon les breakpoints officiels

### Accessibilité RGAA
- **Focus visible** : Contours bleus sur les éléments interactifs
- **Navigation clavier** : Support complet Tab/Shift+Tab/Échap
- **Labels ARIA** : Descriptions pour les lecteurs d'écran
- **Contraste** : Ratios conformes aux standards

## 🚀 Fonctionnalités

### Page de connexion
- Logo Marianne officiel
- Bouton France Connect (simulé)
- Texte d'introduction et mention de sécurité

### Interface principale
- Champ de saisie pour les questions
- Boutons d'actions rapides
- Simulation de réponses IA
- Navigation au clavier

### Accessibilité
- Support complet du clavier
- Focus management
- Labels d'accessibilité
- Mode sombre automatique

## 📱 Responsive Design

### Breakpoints DSFR
- **XS** : 0-575px (mobile)
- **SM** : 576-767px (tablette)
- **MD** : 768-991px (petit desktop)
- **LG** : 992-1247px (desktop)
- **XL** : ≥1248px (grand écran)

### Adaptations
- Typographie responsive
- Layout flexible
- Boutons adaptatifs
- Espacement optimisé

## 🔧 Bonnes pratiques

### Séparation des responsabilités
- **HTML** : Structure sémantique uniquement
- **CSS** : Styles dans des fichiers séparés
- **JavaScript** : Logique orientée objet

### Performance
- **Polices** : `font-display: swap` pour le chargement
- **CSS** : Variables CSS pour la maintenance
- **JavaScript** : Classes ES6+ pour la lisibilité

### Maintenabilité
- **Variables CSS** : Palette DSFR centralisée
- **Classes utilitaires** : Espacement standardisé
- **Documentation** : Code commenté et structuré

## 🎯 Standards respectés

### DSFR (Système de Design de l'État)
- ✅ Palette de couleurs officielle
- ✅ Espacement 8-point grid
- ✅ Typographie Marianne
- ✅ Breakpoints officiels
- ✅ Accessibilité RGAA

### Web Standards
- ✅ HTML5 sémantique
- ✅ CSS3 avec variables
- ✅ JavaScript ES6+
- ✅ Responsive design
- ✅ Progressive enhancement

## 🚀 Installation et utilisation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd Marianne
   ```

2. **Ouvrir avec Live Server**
   - Installer l'extension Live Server dans VS Code
   - Clic droit sur `index.html` → "Open with Live Server"

3. **Ou utiliser un serveur local**
   ```bash
   python -m http.server 8000
   # Puis ouvrir http://localhost:8000
   ```

## 🔮 Évolutions futures

### Backend Python/FastAPI
- Authentification France Connect réelle
- Intégration IA Mistral
- API pour les services publics

### Fonctionnalités avancées
- Conversation persistante
- Historique des démarches
- Notifications push
- Mode hors ligne

### Améliorations UX
- Animations fluides
- Feedback haptique
- Voice input/output
- Personnalisation

## 📄 Licence

Ce projet respecte les standards du Système de Design de l'État français et est destiné à un usage gouvernemental.

---

**Marianne** - L'IA au service de la République 🇫🇷 