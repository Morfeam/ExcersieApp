

import { myFetch } from "./my-fetch";



export function getAllFollows() {
    return myFetch('followers');
}

export function getFollowers(follower_id) {
    return myFetch('followers/follower/' + follower_id);
}

export function getFollowing(following_id) {
    return myFetch('followers/following/' + following_id);
}

export function addUser(FirstName, LastName, DOB, Password, User_Type, Email){
    return myFetch('users/add/' + FirstName, LastName, DOB, Password, User_Type, Email);
}

export function addUser2(user){
    console.log("user:" +user);
    return myFetch('users/add/:' + user);
}