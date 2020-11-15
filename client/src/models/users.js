

import { myFetch } from "./my-fetch";



export function getList() {
    return myFetch('http://localhost:3007/users');
}

export function newUser(){
    return myFetch('http://localhost:3007/users/register');
}