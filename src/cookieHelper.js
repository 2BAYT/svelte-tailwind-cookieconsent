import Cookies from 'js-cookie'


export function refresh(key){
    let cookie = getCookie(key);
    console.log(cookie);
    if(cookie){
        setCookie(key,cookie);
    }
}

export function setCookie(key,value){
    Cookies.set(key, value , { expires: 36500, secure: true });
}

export function getCookie(key){
    return Cookies.get(key);
}

export function removeCookie(key){
    return Cookies.remove(key);
}