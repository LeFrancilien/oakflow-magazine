# 🚀 Instructions Rapides - Données YouTube

## ⚠️ API YouTube Non Activée

L'API YouTube Data v3 doit être activée. Suivez ce lien:
https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=397819622827

Une fois activée, attendez 2-3 minutes puis relancez:
```bash
node scripts/fetch-youtube-data.js
```

---

## 📝 Solution Manuelle Rapide (5 minutes)

Pour chaque vidéo ci-dessous, ouvrez l'URL et récupérez:
1. **Nombre de vues** (sous la vidéo)
2. **Photo de profil** (clic droit sur l'avatar → "Copier l'adresse de l'image")

### Vidéo 1: Claude Sonnet 4.6
- URL: https://www.youtube.com/watch?v=whlwHMDoedI
- Cherchez: `28 300 vues` → Notez au format `28.3K`
- Avatar: Clic droit sur la photo de Melvynx → Copier URL

### Vidéo 2: Gemini 3.1 PRO
- URL: https://www.youtube.com/watch?v=025r8JU8iY4
- Cherchez: nombre de vues → Format `XX.XK`
- Avatar: Même channel que vidéo 1 (Melvynx)

### Vidéo 3: 100 Shorts Viraux
- URL: https://www.youtube.com/watch?v=vpXVrSgia5o
- Cherchez: nombre de vues
- Avatar: MechaPizzAI

### Vidéo 4: 7 fonctionnalités Claude
- URL: https://www.youtube.com/watch?v=RLpMbcWaQnE
- Cherchez: nombre de vues
- Avatar: Elliott Pierret

### Vidéo 5: Guide COWORK
- URL: https://www.youtube.com/watch?v=gob6AZwS-TI
- Cherchez: nombre de vues
- Avatar: Baptiste Simard - IA

### Vidéo 6: OpenClaw
- URL: https://www.youtube.com/watch?v=MPB1H9cMh8A
- Cherchez: nombre de vues
- Avatar: Shubham SHARMA

---

## 📋 Format pour videos.ts

Une fois les données récupérées, mettez à jour `src/data/videos.ts`:

```typescript
{
  id: '1',
  views: '28.3K',  // ← Nombre réel
  author: {
    name: 'Melvynx • Apprendre à coder',
    avatar: 'https://yt3.googleusercontent.com/...'  // ← URL réelle
  }
}
```

---

## ⏱️ Estimation

- **Avec API** (après activation): 30 secondes automatique
- **Manuellement**: 5 minutes pour les 6 vidéos

Dites-moi quelle approche vous préférez !
