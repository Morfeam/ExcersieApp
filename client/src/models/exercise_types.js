

import { myFetch } from "./my-fetch";



export function getExerciseList() {
    return myFetch('exercise_types');
}
