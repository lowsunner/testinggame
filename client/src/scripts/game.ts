const gameFrame = document.getElementById('game-frame') as HTMLIFrameElement;
const currentGameName = document.title.split(' - ')[1] || 'Game';

gameFrame.onload = function () {
    if (gameFrame.contentWindow) {
        try {
            const iframeDoc = gameFrame.contentDocument || gameFrame.contentWindow.document;
            const title = iframeDoc.title;
            if (title.includes('404') || title.includes('Not Found')) {
                gameFrame.src = 'https://enchanteddonutstudioz.github.io/the-math-hub-CDN/g/' + currentGameName;
            }
        } catch (e) {
            console.log('Cannot access iframe content due to Same-Origin Policy.');
        }
    }

};