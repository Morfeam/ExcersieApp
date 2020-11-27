

import { myFetch } from "./my-fetch";



export function getCommentsList(Workout_id) {
    return myFetch('comments/workout/' + Workout_id);
}

export function addComment(Text,Workout_id,Owner_id){
    return myFetch('comments/add', {Text: Text,Workout_id: Workout_id,Owner_id: Owner_id});
}
