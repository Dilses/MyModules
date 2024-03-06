if ('STRING.GLOBAL.TITLE.ANIMATION.LIMIT' in window.locTex)
{
    var limit = window.locTex['STRING.GLOBAL.TITLE.ANIMATION.LIMIT'];
    var delay = 200;
    if ('STRING.GLOBAL.TITLE.ANIMATION.DELAY' in window.locTex)
    {
        delay = window.locTex['STRING.GLOBAL.TITLE.ANIMATION.DELAY'];
    }
    var now = 0;
    setInterval(() => {
        if (now >= limit)
        {
            now = 0
        }
        document.title = `STRING.GLOBAL.TITLE.ANIMATION.${now}`;
        refreshTitle();
        now++;
    }, delay);
}