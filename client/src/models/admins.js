

import { myFetch } from "./my-fetch";



export function getList() {
    return myFetch('http://localhost:3007/users');
}

export function newUser(){
    console.log(users);
    return myFetch('http://localhost:3007/users/');
}