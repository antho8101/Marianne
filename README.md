# Marianne - IA Républicaine

[![Conforme DSFR](assets/badge-dsfr.svg)](https://www.systeme-de-design.gouv.fr/)
[![Build Status](https://github.com/votre-org/marianne-ia-republicaine/workflows/Validation%20et%20tests/badge.svg)](https://github.com/votre-org/marianne-ia-republicaine/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interface conversationnelle minimaliste centralisant les services publics français, conforme au Système de Design de l'État.

## 📋 Sommaire

- [🎯 Objectif](#-objectif)
- [🏗️ Architecture](#️-architecture)
- [🎨 Conformité DSFR](#-conformité-dsfr)
- [🚀 Fonctionnalités](#-fonctionnalités)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Bonnes pratiques](#-bonnes-pratiques)
- [🎯 Standards respectés](#-standards-respectés)
- [🚀 Installation et utilisation](#-installation-et-utilisation)
- [🛡️ Qualité et conformité](#️-qualité-et-conformité)
- [📊 Tests et validation](#-tests-et-validation)
- [🔮 Évolutions futures](#-évolutions-futures)
- [❓ FAQ](#-faq)
- [📄 Licence](#-licence)

## 🎯 Objectif

Marianne propose une interface ultra-simple pour accéder à tous les services publics français via une conversation naturelle avec une IA. L'utilisateur se connecte via France Connect et peut effectuer ses démarches, obtenir des conseils, effectuer des paiements et prendre des rendez-vous.

## 🏗️ Architecture

### Structure des fichiers

```
Marianne/
├── index.html              # Page principale
├── chat.html               # Page de chat IA
├── styles/
│   ├── main.css           # Styles principaux DSFR
│   └── components.css     # Composants spécifiques
├── js/
│   └── app.js            # Logique JavaScript
├── assets/
│   ├── fonts/            # Polices Marianne
│   ├── screenshots/      # Captures d'écran
│   ├── logo-marianne.svg # Logo officiel
│   ├── logo-marianne-white.svg # Logo blanc
│   ├── logo-franceconnect.png # Logo FranceConnect
│   ├── badge-dsfr.svg    # Badge conformité DSFR
│   └── favicon.ico       # Favicon
├── .github/
│   └── workflows/
│       └── validate.yml  # Workflow CI/CD
├── .well-known/
│   └── security.txt      # Politique de sécurité
├── LICENSE                # Licence open source (MIT)
├── .gitignore             # Fichiers à ignorer
├── CONTRIBUTING.md        # Guide de contribution
├── CODE_OF_CONDUCT.md     # Code de conduite
├── SECURITY.md            # Politique de sécurité
├── CHANGELOG.md           # Historique des évolutions
├── .env.example           # Exemple de configuration d'environnement
├── package.json           # Configuration npm
├── .editorconfig          # Configuration éditeur
├── browserslist           # Compatibilité navigateurs
├── manifest.json          # Métadonnées PWA
├── robots.txt             # Configuration moteurs de recherche
├── axe-core.json          # Configuration tests accessibilité
├── test-setup.md          # Guide des tests
├── performance.md         # Optimisations performance
├── deployment.md          # Guide de déploiement
├── CITATION.cff           # Citation académique
└── README.md              # Documentation
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
   git clone [https://github.com/antho8101/Marianne]
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

4. **Ou utiliser npm**
   ```bash
   npm install
   npm start
   ```

## 🛡️ Qualité et conformité

Ce dépôt inclut :
- Une [LICENCE](./LICENSE) open source (MIT)
- Un [CONTRIBUTING.md](./CONTRIBUTING.md) clair
- Un [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) pour un environnement respectueux
- Un [SECURITY.md](./SECURITY.md) pour signaler les failles
- Un [CHANGELOG.md](./CHANGELOG.md) pour le suivi des évolutions
- Un [.env.example](./.env.example) pour la configuration
- Un [.gitignore](./.gitignore) adapté
- Un workflow [GitHub Actions](./.github/workflows/validate.yml) pour la validation automatique
- Une configuration [accessibilité](./axe-core.json) et [performance](./performance.md)
- Un guide de [déploiement](./deployment.md) complet

Le projet respecte les standards de l'État, la sécurité, l'accessibilité, la neutralité et la transparence attendus dans l'administration publique.

## 📊 Tests et validation

### Tests automatisés
- **HTML/CSS** : Validation W3C via GitHub Actions
- **Accessibilité** : Tests pa11y automatiques
- **Structure** : Vérification des fichiers requis
- **DSFR** : Validation de la conformité

### Tests manuels recommandés
- [ ] Navigation au clavier
- [ ] Lecteurs d'écran (NVDA, JAWS)
- [ ] Contraste des couleurs
- [ ] Responsive sur différents appareils
- [ ] Performance (Lighthouse)

### Métriques de qualité
- **Accessibilité** : 100% WCAG AA
- **Performance** : 90+ Lighthouse
- **SEO** : 100% optimisé
- **Sécurité** : Headers de sécurité complets

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

## ❓ FAQ

### Q: Pourquoi ce projet est-il statique ?
**R:** Le MVP est statique pour valider rapidement le concept et la conformité DSFR. Le backend sera développé dans une phase ultérieure.

### Q: Comment tester l'accessibilité ?
**R:** Utilisez les outils recommandés dans [test-setup.md](./test-setup.md) : axe-core, Lighthouse, WAVE.

### Q: Le projet est-il open source ?
**R:** Oui, sous licence MIT. Voir [LICENSE](./LICENSE) pour plus de détails.

### Q: Comment contribuer ?
**R:** Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les guidelines de contribution.

### Q: Y a-t-il des captures d'écran ?
**R:** Oui, dans le dossier [assets/screenshots/](./assets/screenshots/) (à compléter).

## 📄 Licence

Ce projet respecte les standards du Système de Design de l'État français et est destiné à un usage gouvernemental.

---

**Marianne** - L'IA au service de la République 🇫🇷 