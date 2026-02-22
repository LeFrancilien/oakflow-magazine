/**
 * Script pour récupérer les vraies données YouTube (vues et avatars)
 *
 * PREREQUIS:
 * 1. Installer node-fetch: npm install node-fetch
 * 2. Obtenir une clé API YouTube gratuite: https://console.cloud.google.com/apis/credentials
 * 3. Remplacer 'YOUR_API_KEY' ci-dessous par votre clé
 */

import fetch from 'node-fetch';

const API_KEY = 'AIzaSyBFxWNDxfan3CLOfGbQAFJW4RZx13TQ_LI';

const videoIds = [
    'whlwHMDoedI',
    '025r8JU8iY4',
    'vpXVrSgia5o',
    'RLpMbcWaQnE',
    'gob6AZwS-TI',
    'MPB1H9cMh8A'
];

async function getVideoData(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(`Response for ${videoId}:`, JSON.stringify(data, null, 2));

        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            const channelId = video.snippet.channelId;

            // Récupérer les données du channel pour l'avatar
            const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
            const channelResponse = await fetch(channelUrl);
            const channelData = await channelResponse.json();

            const channelAvatar = channelData.items[0]?.snippet?.thumbnails?.default?.url || '';

            return {
                videoId: videoId,
                title: video.snippet.title,
                channelName: video.snippet.channelTitle,
                viewCount: parseInt(video.statistics.viewCount),
                viewCountFormatted: formatViews(parseInt(video.statistics.viewCount)),
                channelAvatar: channelAvatar,
                publishedAt: video.snippet.publishedAt.split('T')[0]
            };
        }
    } catch (error) {
        console.error(`Erreur pour la vidéo ${videoId}:`, error.message);
        return null;
    }
}

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
}

async function main() {
    console.log('📊 Récupération des données YouTube en cours...\n');

    const results = [];

    for (const videoId of videoIds) {
        console.log(`Traitement de ${videoId}...`);
        const data = await getVideoData(videoId);
        if (data) {
            results.push(data);
            console.log(`✓ ${data.title}`);
            console.log(`  Vues: ${data.viewCountFormatted} (${data.viewCount})`);
            console.log(`  Channel: ${data.channelName}`);
            console.log(`  Avatar: ${data.channelAvatar}\n`);
        }
        // Pause pour éviter de surcharger l'API
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n📝 Résultats en JSON:\n');
    console.log(JSON.stringify(results, null, 2));

    console.log('\n\n💡 Instructions:');
    console.log('1. Copiez les données ci-dessus');
    console.log('2. Mettez à jour src/data/videos.ts avec:');
    console.log('   - views: utilisez viewCountFormatted');
    console.log('   - author.avatar: utilisez channelAvatar');
}

main();
