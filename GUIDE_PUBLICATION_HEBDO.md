# 📅 Guide de Publication Hebdomadaire - OakflowAI Magazine

> Guide pour publier votre magazine IA chaque dimanche

---

## 🎯 Vue d'ensemble

Chaque dimanche, vous publiez une sélection de 6 vidéos YouTube sur l'IA. Ce guide vous accompagne de A à Z.

**Durée totale estimée :** 15-20 minutes

---

## 📋 Checklist rapide

- [ ] Sélectionner 6 nouvelles vidéos YouTube
- [ ] Ajouter les vidéos dans `src/data/videos.ts`
- [ ] Récupérer les données YouTube réelles (vues + avatars)
- [ ] Mettre à jour les vignettes sur oakflowai.com
- [ ] Tester en local
- [ ] Déployer sur GitHub/Vercel

---

## 🎬 Étape 1 : Sélection des vidéos

### Critères de sélection
- **Thématiques :** Infrastructure IA, Agents IA, Vibecoding, Développement IA
- **Langue :** Français principalement
- **Qualité :** Vidéos récentes (moins de 7 jours), contenu pertinent
- **Mix :** Varier les créateurs et les sujets

### Catégories disponibles
- `Développement`
- `Business & Infra IA`
- `Automatisation`

### Informations à collecter
Pour chaque vidéo, notez :
1. **URL YouTube** (ex: `https://www.youtube.com/watch?v=whlwHMDoedI`)
2. **videoId** (les 11 caractères après `v=`)
3. **Titre** (copiez le titre exact de YouTube)
4. **Description courte** (1-2 phrases résumant la vidéo)
5. **Catégorie** (choisir parmi la liste ci-dessus)
6. **5 points clés** (les takeaways principaux de la vidéo)

---

## ✍️ Étape 2 : Ajouter les vidéos dans le code

### Fichier à modifier : `src/data/videos.ts`

**Ouvrez le fichier et remplacez les 6 vidéos existantes** par vos nouvelles sélections.

### Template pour une vidéo

```typescript
{
    id: '1',  // Numérotez de 1 à 6
    title: 'Titre exact de la vidéo YouTube',
    description: 'Description courte et engageante (1-2 phrases)',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',  // Remplacez VIDEO_ID
    category: 'Développement',  // ou 'Business & Infra IA' ou 'Automatisation'
    duration: '18:25',  // Format MM:SS (visible sur YouTube)
    views: '0',  // Sera mis à jour automatiquement à l'étape suivante
    publishedDate: '2026-02-23',  // Format YYYY-MM-DD (date du dimanche de publication)
    author: {
        name: 'Nom du créateur YouTube',
        avatar: ''  // Sera mis à jour automatiquement à l'étape suivante
    },
    tags: ['Tag1', 'Tag2', 'Tag3'],  // 2-4 tags pertinents
    featured: true,  // Mettez true pour les 2-3 meilleures vidéos
    videoId: 'VIDEO_ID',  // Les 11 caractères de l'URL YouTube
    keyPoints: [
        'Premier point clé de la vidéo',
        'Deuxième point clé expliquant un concept important',
        'Troisième point avec un cas d\'usage concret',
        'Quatrième point sur les bénéfices ou résultats',
        'Cinquième point : conclusion ou prochaines étapes'
    ]
}
```

### Exemple concret

```typescript
{
    id: '1',
    title: 'NOUVEAU Modèle Claude : Sonnet 4.6 (+ 1 million de token option)',
    description: 'Découvrez le nouveau modèle Claude Sonnet 4.6 avec sa capacité révolutionnaire de traiter jusqu\'à 1 million de tokens.',
    thumbnail: 'https://img.youtube.com/vi/whlwHMDoedI/maxresdefault.jpg',
    category: 'Développement',
    duration: '18:25',
    views: '0',
    publishedDate: '2026-02-23',
    author: {
        name: 'Melvynx • Apprendre à coder',
        avatar: ''
    },
    tags: ['Claude', 'Sonnet 4.6', 'IA'],
    featured: true,
    videoId: 'whlwHMDoedI',
    keyPoints: [
        'Présentation du nouveau modèle Claude Sonnet 4.6 et ses capacités',
        'Option exclusive : traitement de 1 million de tokens en une seule requête',
        'Comparaison des performances avec les versions précédentes',
        'Cas d\'usage concrets pour exploiter cette puissance',
        'Tarification et disponibilité de cette nouvelle option'
    ]
}
```

---

## 🔄 Étape 3 : Récupérer les données YouTube réelles

### Pourquoi ?
Pour avoir les **vrais nombres de vues** et les **vraies photos de profil** des créateurs (légalement, pas de fausses données).

### Option A : Script automatique (30 secondes) ✅ **RECOMMANDÉ**

#### 1. Vérifiez que l'API YouTube est activée

Votre clé API : `AIzaSyBFxWNDxfan3CLOfGbQAFJW4RZx13TQ_LI`

Si vous obtenez une erreur 403, activez l'API ici :
👉 https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=397819622827

#### 2. Lancez le script

```bash
node scripts/fetch-youtube-data.js
```

#### 3. Copiez les résultats

Le script affiche un JSON avec :
- `viewCountFormatted` : nombre de vues formaté (ex: "28.3K")
- `channelAvatar` : URL de la photo de profil
- `channelName` : nom exact du créateur

#### 4. Mettez à jour `src/data/videos.ts`

Pour chaque vidéo, remplacez :
- `views: '0'` par `views: 'XX.XK'` (valeur de `viewCountFormatted`)
- `avatar: ''` par `avatar: 'https://yt3.ggpht.com/...'` (valeur de `channelAvatar`)

### Option B : Récupération manuelle (5 minutes)

Si le script ne fonctionne pas, récupérez manuellement :

1. Ouvrez chaque vidéo YouTube
2. **Nombre de vues** : sous la vidéo (ex: "28 300 vues" → notez "28.3K")
3. **Avatar** : clic droit sur la photo du créateur → "Copier l'adresse de l'image"
4. Mettez à jour `src/data/videos.ts` avec ces données

---

## 🌐 Étape 4 : Mettre à jour les vignettes sur oakflowai.com

### Pourquoi ?
Pour afficher les 3 meilleures vidéos sur votre site principal (appel à l'action).

### Fichier à modifier : `oakflowai-website/index.html`

Cherchez la section "Nos dernières publications" (lignes ~1113-1144).

### Template pour une vignette

```html
<a href="https://oakflow-magazine.vercel.app"
   class="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
    <div class="aspect-video relative overflow-hidden">
        <img src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
             alt="Titre de la vidéo"
             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4">
            <h3 class="text-white font-bold text-lg line-clamp-2 mb-2">
                Titre court de la vidéo
            </h3>
            <p class="text-gray-300 text-sm">Catégorie</p>
        </div>
    </div>
</a>
```

### Remplacez pour les 3 meilleures vidéos

- `VIDEO_ID` : videoId de la vidéo
- `alt` et `h3` : titre de la vidéo
- `Catégorie` : Développement, Business & Infra IA, ou Automatisation

---

## 🧪 Étape 5 : Tester en local

### 1. Démarrer le serveur de développement

```bash
npm run dev
```

### 2. Ouvrir dans le navigateur

👉 http://localhost:5173

### 3. Vérifications

- [ ] Les 6 vidéos s'affichent correctement
- [ ] Les vignettes (thumbnails) YouTube se chargent
- [ ] Les nombres de vues sont corrects
- [ ] Les avatars des créateurs s'affichent
- [ ] Les catégories sont bonnes
- [ ] Le header "OakflowAI Magazine" s'affiche avec le dégradé cyan
- [ ] Cliquer sur une vidéo ouvre la modal
- [ ] La modal YouTube fonctionne

### 4. Tester le responsive

- [ ] Desktop (1920px)
- [ ] Tablette (768px)
- [ ] Mobile (375px)

---

## 🚀 Étape 6 : Déployer

### 1. Vérifier les changements

```bash
git status
```

Vous devriez voir :
- `src/data/videos.ts` (modifié)
- `oakflowai-website/index.html` (modifié si vous avez mis à jour les vignettes)

### 2. Créer un commit

```bash
git add src/data/videos.ts
git commit -m "Publication hebdo : 6 nouvelles vidéos IA - Semaine du JJ/MM/YYYY"
```

Si vous avez aussi mis à jour les vignettes :

```bash
git add oakflowai-website/index.html
git commit -m "Publication hebdo : 6 nouvelles vidéos IA + vignettes site web - Semaine du JJ/MM/YYYY

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

### 3. Push vers GitHub

```bash
git push origin main
```

### 4. Déploiement automatique Vercel

✅ Vercel détecte le push et déploie automatiquement (30-60 secondes)

### 5. Vérification finale

1. Ouvrez https://oakflow-magazine.vercel.app
2. Vérifiez que les nouvelles vidéos sont en ligne
3. Testez quelques clics et la modal vidéo

---

## 📊 Étape 7 : Communication (optionnel)

### Partage sur les réseaux

Template de post LinkedIn/Twitter :

```
🤖 Nouvelle édition du #OakflowAI Magazine !

Cette semaine, 6 vidéos essentielles sur l'IA :
• [Thème vidéo 1]
• [Thème vidéo 2]
• [Thème vidéo 3]

🔗 Découvrir : https://oakflow-magazine.vercel.app

#IntelligenceArtificielle #IA #Veille #Tech
```

---

## 🔧 Dépannage

### Le script YouTube ne fonctionne pas (erreur 403)

**Solution :** Activez l'API YouTube Data v3
👉 https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=397819622827

Attendez 2-3 minutes puis relancez :
```bash
node scripts/fetch-youtube-data.js
```

### Les vignettes YouTube ne s'affichent pas

**Solution :** Vérifiez le format de l'URL thumbnail
✅ Correct : `https://img.youtube.com/vi/whlwHMDoedI/maxresdefault.jpg`
❌ Incorrect : `https://youtube.com/...` ou sans `/maxresdefault.jpg`

### Erreur lors du push Git

**Solution :** Vérifiez que vous êtes sur la branche main
```bash
git branch  # Doit afficher * main
git pull origin main  # Met à jour depuis GitHub
git push origin main
```

### Vercel ne déploie pas

**Solution 1 :** Vérifiez le statut sur https://vercel.com/dashboard

**Solution 2 :** Forcez le redéploiement
- Connectez-vous à Vercel
- Projet "oakflow-magazine"
- Onglet "Deployments"
- Bouton "Redeploy"

---

## 📝 Historique des publications

### Semaine du 23/02/2026
- ✅ 6 vidéos ajoutées
- ✅ Données YouTube réelles récupérées
- ✅ Header minimaliste avec dégradé cyan

### Semaine du 16/02/2026
- ✅ Première publication
- ✅ 6 vidéos : Claude Sonnet 4.6, Gemini 3.1 PRO, etc.

---

## 💡 Conseils pour une publication réussie

1. **Anticipation :** Sélectionnez vos vidéos le samedi soir pour publier le dimanche matin
2. **Diversité :** Mélangez tutoriels, actualités, et analyses approfondies
3. **Qualité > Quantité :** Privilégiez 6 excellentes vidéos plutôt que 10 moyennes
4. **Cohérence :** Gardez un équilibre entre les 3 catégories (Développement, Business, Automatisation)
5. **Points clés :** Regardez vraiment les vidéos pour extraire les vrais takeaways

---

## 📞 Support

**En cas de problème :**
1. Consultez la section "Dépannage" ci-dessus
2. Vérifiez les logs Vercel : https://vercel.com/dashboard
3. Consultez le guide `INSTRUCTIONS_RAPIDES.md` pour la récupération manuelle

**Contact :** contact@oakflowai.com

---

✅ **Guide complet. Bon courage pour vos publications hebdomadaires !** 🚀
