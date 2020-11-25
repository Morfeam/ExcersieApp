

import { myFetch } from "./my-fetch";



export function getExerciseList() {
    return myFetch('exercise_types');
}

export function delExerciseType(id){
    return myFetch('workouts/delete/' + id);
}
