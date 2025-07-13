# Guide de déploiement pour Marianne

## Environnements

### Développement local
```bash
# Démarrer le serveur local
python -m http.server 8000
# ou
npm start
```

### Production
- **URL** : https://marianne.gouv.fr
- **Serveur** : Infrastructure de l'État
- **SSL** : Certificat officiel
- **CDN** : CloudFlare (si applicable)

## Configuration serveur

### Headers de sécurité
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;
```

### Compression
- Gzip activé
- Brotli si supporté
- Cache statique : 1 an

### Monitoring
- Logs d'accès
- Métriques de performance
- Alertes en cas d'erreur

## Checklist de déploiement

### Pré-déploiement
- [ ] Tests d'accessibilité passés
- [ ] Tests de performance OK
- [ ] Validation HTML/CSS
- [ ] Vérification responsive
- [ ] Test sur différents navigateurs

### Post-déploiement
- [ ] Vérification HTTPS
- [ ] Test des métadonnées
- [ ] Validation des liens
- [ ] Test d'accessibilité en production
- [ ] Monitoring des performances

## Rollback
- Sauvegarde automatique avant déploiement
- Possibilité de revenir à la version précédente
- Procédure documentée 