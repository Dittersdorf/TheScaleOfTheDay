const scales = [
    "C Major", "C Minor", "Db Major", "Db Minor",
    "D Major", "D Minor", "Eb Major", "Eb Minor",
    "E Major", "E Minor", "F Major", "F Minor",
    "Gb Major", "Gb Minor", "G Major", "G Minor",
    "Ab Major", "Ab Minor", "A Major", "A Minor",
    "Bb Major", "Bb Minor", "B Major", "B Minor",
    "C Minor harm", "Db Minor harm", "D Minor harm",
    "Eb Minor harm", "E Minor harm", "F Minor harm", 
    "Gb Minor harm", "G Minor harm", "Ab Minor harm", 
    "Bb Minor harm", "B Minor harm",
];

function getRandomScale() {
    const randomIndex = Math.floor(Math.random() * scales.length);
    return scales[randomIndex];
}

function updateStatistics(scale) {
    let stats = JSON.parse(localStorage.getItem('scaleStats')) || {};

    if (stats[scale]) {
        stats[scale]++;
    } else {
        stats[scale] = 1;
    }

    localStorage.setItem('scaleStats', JSON.stringify(stats));
    return stats;
}

function displayStatistics(stats) {
    const statsList = document.getElementById('stats-list');
    statsList.innerHTML = '';

    const total = Object.values(stats).reduce((sum, count) => sum + count, 0);

    for (let [scale, count] of Object.entries(stats)) {
        const percentage = ((count / total) * 100).toFixed(2);
        const listItem = document.createElement('li');
        listItem.textContent = `${scale}: ${percentage}%`;
        statsList.appendChild(listItem);
    }
}

function updatePageViews() {
    let views = localStorage.getItem('pageViews') || 0;
    views++;
    localStorage.setItem('pageViews', views);
    document.getElementById('total-views').textContent = views;
}

document.addEventListener('DOMContentLoaded', () => {
    const scaleOfTheDay = getRandomScale();
    document.getElementById('scale').textContent = scaleOfTheDay;

    const stats = updateStatistics(scaleOfTheDay);
    displayStatistics(stats);

    updatePageViews();
});
