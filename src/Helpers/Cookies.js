export function getCookie(name) {
    var cookieArr = document.cookie.split(";");

    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

export function setObjToCookie(obj) {
    Object.entries(obj).forEach(element => {
        document.cookie = element[0] + "=" + element[1];
    });
}

export function removeCookie(name){
    document.cookie=name+"=;"
}