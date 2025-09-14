const frame = document.getElementById("game-frame");
const gameName = document.title.split(' - ')[1] || 'Game';

document
    .getElementById("reload-btn")
    ?.addEventListener("click", () => {
        frame.src = frame.src;
    });

const gameArea = document.getElementById("game-frame");
document
    .getElementById("fullscreen-btn")
    ?.addEventListener("click", async () => {
        try {
            if (!document.fullscreenElement) {
                await gameArea.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (e) {
            console.error(e);
        }
    });


frame.onload = function () {
    if (frame.contentWindow) {
        try {
            const iframeDoc = frame.contentDocument || frame.contentWindow.document;
            const title = iframeDoc.title;
            if (title.includes('404') || title.includes('Not Found')) {
                frame.src = 'https://enchanteddonutstudioz.github.io/the-math-hub-CDN/g/' + frame.getAttribute('data-src').split('/')[3];
            }
        } catch (e) {
            console.log('Cannot access iframe content due to Same-Origin Policy.');
        }
    }

};


async function loadMoreGames() {
    const moreGamesContainer = document.getElementById('more-games');
    if (!moreGamesContainer) return;

    const pathParts = window.location.pathname.split('/');
    const currentGameId = pathParts.find(part => part && part !== 'play') || '';

    try {
        const response = await fetch('/json/games.json');
        if (!response.ok) throw new Error('Failed to load games.json');
        const games = await response.json();


        const otherGames = games.filter(game => game.url !== currentGameId);


        const shuffled = otherGames.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);

        moreGamesContainer.innerHTML = '';


        selected.forEach(game => {
            const fallbackImageUrl = `https://enchanteddonutstudioz.github.io/the-math-hub-CDN/imgs/${game.image.split('/').pop()}`;

            const tile = document.createElement('a');
            tile.href = `/play/${game.url}/`;
            tile.className = 'game-tile';
            tile.innerHTML = `
            <div class="tile-image">
                <img src="${game.image}" alt="${game.name}" style="width:100%;height:120%;object-fit:cover;" 
                     onerror="this.onerror=null;this.src='${fallbackImageUrl}'">
            </div>
            <div class="tile-text">
                <p>${game.name}</p>
            </div>
        `;
            moreGamesContainer.appendChild(tile);
        });

    } catch (error) {
        console.error('Error loading more games:', error);
        moreGamesContainer.innerHTML = '<p>Could not load more games.</p>';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMoreGames);
} else {
    loadMoreGames();
}