if ('STRING.GOLBAL.TITLE.ANIMATION.LIMIT' in window.locTex)
{
    var limit = window.locTex['STRING.GOLBAL.TITLE.ANIMATION.LIMIT'];
    var delay = 200;
    if ('STRING.GOLBAL.TITLE.ANIMATION.DELAY' in window.locTex)
    {
        delay = window.locTex['STRING.GOLBAL.TITLE.ANIMATION.DELAY'];
    }
    var now = 0;
    setInterval(() => {
        if (now >= limit)
        {
            now = 0
        }
        document.title = `STRING.GOLBAL.TITLE.ANIMATION.${now}`;
        refreshTitle();
        now++;
    }, delay);
}