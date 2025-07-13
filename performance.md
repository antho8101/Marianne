# Optimisations de performance pour Marianne

## Métriques cibles

### Core Web Vitals
- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms  
- **CLS (Cumulative Layout Shift)** : < 0.1

### Autres métriques
- **FCP (First Contentful Paint)** : < 1.5s
- **TTI (Time to Interactive)** : < 3.8s
- **TBT (Total Blocking Time)** : < 300ms

## Optimisations appliquées

### CSS
- [x] Police Marianne optimisée (woff2)
- [x] CSS minifié et externalisé
- [x] Pas d'animations inutiles
- [x] Variables CSS pour la cohérence

### JavaScript
- [x] Code minimal et optimisé
- [x] Pas de framework lourd
- [x] Gestion d'événements efficace

### Images
- [x] Logo SVG (vectoriel, léger)
- [x] Favicon optimisé
- [x] FranceConnect PNG optimisé

### HTML
- [x] Structure sémantique
- [x] Métadonnées complètes
- [x] Accessibilité intégrée

## Monitoring

### Outils recommandés
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- GTmetrix

### Points de vigilance
- [ ] Temps de chargement initial
- [ ] Performance sur mobile
- [ ] Optimisation des polices
- [ ] Compression des assets 