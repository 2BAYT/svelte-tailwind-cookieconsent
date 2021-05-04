import Cookies from 'js-cookie'

export function setCookie(key,value){
    Cookies.set(key, value);
}

export function getCookie(key){
    return Cookies.get(key);
}

export function removeCookie(key){
    return Cookies.remove(key);
}