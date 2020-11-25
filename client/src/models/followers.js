

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

export function addFollowing(Following_id,Follower_id,Is_Accepted){
    return myFetch('followers/add', {Following_id: Following_id, Follower_id: Follower_id, Is_Accepted: Is_Accepted });
}
