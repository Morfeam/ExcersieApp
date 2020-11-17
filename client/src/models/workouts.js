

import { myFetch } from "./my-fetch";



export function getWorkouts() {
    return myFetch('workouts');
}

export function getUserWorkouts(Owner_id) {
    return myFetch('workouts/owner/' + Owner_id);
}