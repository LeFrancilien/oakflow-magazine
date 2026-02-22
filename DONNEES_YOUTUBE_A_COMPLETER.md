# Données YouTube à Compléter

⚠️ **IMPORTANT**: Les données de vues et les avatars actuels sont des placeholders.
Pour éviter tout problème légal, vous devez les remplacer par les vraies données YouTube.

## Comment récupérer les données:

### Option 1: Manuellement (Rapide)
1. Ouvrez chaque vidéo YouTube dans votre navigateur
2. Notez le nombre de vues exact
3. Cliquez sur le nom de la chaîne pour accéder au profil
4. Faites clic droit sur la photo de profil → "Copier l'adresse de l'image"

### Option 2: Avec le script (Automatique)
1. Obtenez une clé API YouTube gratuite: https://console.cloud.google.com/apis/credentials
2. Installez node-fetch: `npm install node-fetch`
3. Modifiez `scripts/fetch-youtube-data.js` avec votre clé API
4. Exécutez: `node scripts/fetch-youtube-data.js`

---

## Vidéos à mettre à jour dans `src/data/videos.ts`:

### 1. NOUVEAU Modèle Claude : Sonnet 4.6
- **URL**: https://www.youtube.com/watch?v=whlwHMDoedI
- **Channel**: Melvynx • Apprendre à coder
- **Channel URL**: https://www.youtube.com/@melvynxdev
- **Vues actuelles (placeholder)**: 28.3K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=1 → ⚠️ À REMPLACER

### 2. Gemini 3.1 PRO : le meilleur modèle au monde
- **URL**: https://www.youtube.com/watch?v=025r8JU8iY4
- **Channel**: Melvynx • Apprendre à coder
- **Channel URL**: https://www.youtube.com/@melvynxdev
- **Vues actuelles (placeholder)**: 31.7K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=1 → ⚠️ À REMPLACER

### 3. Transforme tes vidéos longues Youtube en 100 Shorts Faceless Viraux
- **URL**: https://www.youtube.com/watch?v=vpXVrSgia5o
- **Channel**: MechaPizzAI
- **Channel URL**: https://www.youtube.com/@MechaPizzAI
- **Vues actuelles (placeholder)**: 19.2K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=12 → ⚠️ À REMPLACER

### 4. J'ai testé 7 fonctionnalités époustouflantes dans Claude !
- **URL**: https://www.youtube.com/watch?v=RLpMbcWaQnE
- **Channel**: Elliott Pierret
- **Channel URL**: https://www.youtube.com/@ElliottPierret
- **Vues actuelles (placeholder)**: 24.8K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=5 → ⚠️ À REMPLACER

### 5. Le Guide Claude COWORK ULTIME en 2026 !
- **URL**: https://www.youtube.com/watch?v=gob6AZwS-TI
- **Channel**: Baptiste Simard - IA
- **Channel URL**: https://www.youtube.com/@BaptisteSimard
- **Vues actuelles (placeholder)**: 16.5K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=8 → ⚠️ À REMPLACER

### 6. Tout le monde parle d'OpenClaw, personne ne comprend
- **URL**: https://www.youtube.com/watch?v=MPB1H9cMh8A
- **Channel**: Shubham SHARMA
- **Channel URL**: https://www.youtube.com/@shubhamsharma
- **Vues actuelles (placeholder)**: 35.9K → ⚠️ À REMPLACER
- **Avatar actuel (placeholder)**: https://i.pravatar.cc/150?img=14 → ⚠️ À REMPLACER

---

## Format des vues:
Utilisez le format compact avec K ou M:
- Moins de 1000: nombre exact (ex: "843")
- Entre 1000 et 1M: utilisez K (ex: "28.3K" pour 28,300)
- Plus de 1M: utilisez M (ex: "1.2M" pour 1,200,000)

## Format des avatars:
Copiez l'URL complète de l'image de profil YouTube.
Format typique: `https://yt3.googleusercontent.com/...`

---

✅ **Une fois complété**, mettez à jour le fichier `src/data/videos.ts` avec ces informations.
