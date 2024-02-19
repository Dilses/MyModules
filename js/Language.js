function getSubstringBeforeSecondDash(str) {
    const parts = str.split('-');
    if (parts.length < 2) {
      return str;
    }
    return parts.slice(0, 2).join('-');
}
var localization = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, u, i, em, s, del');
var userLanguage = getSubstringBeforeSecondDash(navigator.languages[0] || navigator.language || navigator.userLanguage).toLowerCase();
map = {
    "zh": "zh-cn",
    "en": "en-us",
    "af": "af-za",
    "ar": "ar-ae",
    "be": "be-by",
    "bg": "bg-bg",
    "ca": "ca-es",
    "cs": "cs-cz",
    "cy": "cy-gb",
    "da": "da-dk",
    "de": "de-de",
    "dv": "dv-mv",
    "el": "el-gr",
    "es": "es-es",
    "et": "et-ee",
    "fi": "fi-fi",
    "fr": "fr-fr",
    "ga": "ga-ie",
    "he": "he-il",
    "hi": "hi-in",
    "hr": "hr-hr",
    "hu": "hu-hu",
    "id": "id-id",
    "is": "is-is",
    "it": "it-it",
    "ja": "ja-jp",
    "zh-hans": "zh-cn",
    "zh-hant": "zh-tw",
    "zh-hk": "zh-tw",
    "zh-mo": "zh-tw",
    "zh-sg": "zh-tw"
}
if (userLanguage in map){
    userLanguage = map[userLanguage];
}
jsonData = '';
jmp = true;
for (i = 0; i < 5 && jmp; i++){
    await fetch(`static/texts/${userLanguage}.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    jsonData = data;
    console.log(data);
    jmp = false;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
let obj = {};
try {
    obj = JSON.parse(jsonData);
}
catch (e) {
    console.log(e);
}
localization.forEach(function (element) {
    if (element.innerText in obj){
        element.innerText = obj[element.innerText];
    }
});
