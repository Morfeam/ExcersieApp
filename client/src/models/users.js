

import { myFetch } from "./my-fetch";



export function getList() {
    return myFetch('users');
}

export function addUser(FirstName, LastName, DOB, Password, User_Type, Email){
    return myFetch('users/add/' + FirstName, LastName, DOB, Password, User_Type, Email);
}

export function addUser2(user){
    console.log("user:" +user);
    return myFetch('users/add/:' + user);
}