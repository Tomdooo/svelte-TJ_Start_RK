/**
 *  COOKIE PARSER
 **/
export const setCookie = (name, value, length = 604800000, sameSite = "Lax") => {    //expdays*24*60*60*1000  -> 7 dní   604800000
    const date = new Date();
    date.setTime(date.getTime() + length);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};SameSite=${sameSite}`;
}


export const getCookie = (name) => {
    const cname = name + "=";
    const array = document.cookie.split("; ");

    let result = null;
    array.forEach(function(cookie) {
        if(cookie.startsWith(cname)) {
            result = cookie.substring(cname.length);
        }
    });

    return result;
}