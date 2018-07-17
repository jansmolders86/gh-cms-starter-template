chooseCookie();

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function chooseCookie(){
    var userLang = navigator.language || navigator.userLanguage;
    var activeCookie = getCookie('lang');
    if(activeCookie === undefined || activeCookie === null || activeCookie === ''){
        if(userLang.match(/en/g)){
            setCookie('lang','en',7);
        } else {
            setCookie('lang','en',7);
        }
    }
}

