let now = 0;
let limit;
let delays;

new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
        if (window.locTex != undefined) {
            clearInterval(intervalId);
            resolve();
        }
    }, 1000);
}).then(() => {
    if ('STRING.GLOBAL.TITLE.ANIMATION.LIMIT' in window.locTex) {
        limit = window.locTex['STRING.GLOBAL.TITLE.ANIMATION.LIMIT'];
        delays = new Array(limit);
        var delay = 200;
        if ('STRING.GLOBAL.TITLE.ANIMATION.DELAY' in window.locTex) {
            delay = window.locTex['STRING.GLOBAL.TITLE.ANIMATION.DELAY'];
        }
        for (let i = 0; i < limit; i++) {
            if (`STRING.GLOBAL.TITLE.ANIMATION.DELAY.${i}` in window.locTex) {
                delays[i] = window.locTex[`STRING.GLOBAL.TITLE.ANIMATION.DELAY.${i}`];
            }
            else {
                delays[i] = delay;
            }
        }
        console.log(`delays:${delays}`);
        animationTitle();
    }
})
function animationTitle() {
    function exec() {
        document.title = `STRING.GLOBAL.TITLE.ANIMATION.${now}`;
        refreshTitle();
        now++;
        if (now >= limit) {
            now = 0
        }
        animationTitle();
    }

    setTimeout(exec, delays[(now - 1 + limit) % limit]);
}