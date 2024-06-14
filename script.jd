const scales = [
    "C Major", "C Minor", "C# Major", "C# Minor",
    "D Major", "D Minor", "D# Major", "D# Minor",
    "E Major", "E Minor", "F Major", "F Minor",
    "F# Major", "F# Minor", "G Major", "G Minor",
    "G# Major", "G# Minor", "A Major", "A Minor",
    "A# Major", "A# Minor", "B Major", "B Minor"
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

document.addEventListener('DOMContentLoaded', () => {
    const scaleOfTheDay = getRandomScale();
    document.getElementById('scale').textContent = scaleOfTheDay;

    const stats = updateStatistics(scaleOfTheDay);
    displayStatistics(stats);
});
