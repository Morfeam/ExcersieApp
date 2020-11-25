

import { myFetch } from "./my-fetch";



export function getWorkouts() {
    return myFetch('workouts');
}

export function getUserWorkouts(Owner_id) {
    return myFetch('workouts/owner/' + Owner_id);
}

export function addWorkout( Owner_id, Privacy_Setting, Time, Exercise_Type, Note, Distance, Other_Info) {
    return myFetch('workouts/add', { Owner_id: Owner_id, Privacy_Setting: Privacy_Setting, Time: Time, Exercise_Type: Exercise_Type, Note: Note, Distance: Distance, Other_Info: Other_Info});
}

export function deleteWorkout(id){
    return myFetch('workouts/delete/' + id);
}