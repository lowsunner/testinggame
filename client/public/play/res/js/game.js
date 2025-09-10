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
                frame.src = 'https://enchanteddonutstudioz.github.io/the-math-hub-CDN/g/' + gameName;
            }
        } catch (e) {
            console.log('Cannot access iframe content due to Same-Origin Policy.');
        }
    }

};